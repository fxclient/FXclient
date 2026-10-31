import UglifyJS from "uglify-js";

const AST = UglifyJS;
const sameNumber = (left, right) => Math.abs(left - right) < 1e-9;
const setting = "__fx.settings.enhancedLobbyLayout";

function parseExpression(source) {
    return AST.parse(source).body[0].body;
}

function walkWithoutNestedFunctions(root, visit) {
    root.walk(new AST.TreeWalker(node => {
        if (node !== root && ["Function", "Arrow"].includes(node.TYPE)) return true;
        return visit(node);
    }));
}

function numberValues(node) {
    const values = [];
    node.walk(new AST.TreeWalker(current => {
        if (current.TYPE === "Number") values.push(current.value);
    }));
    return values;
}

function assertSingleNumber(node, value) {
    const count = numberValues(node).filter(number => sameNumber(number, value)).length;
    if (count !== 1) throw new Error(`Expected one ${value} literal, found ${count}`);
}

function replaceNumber(node, oldValue, expression) {
    const matches = [];
    node.walk(new AST.TreeWalker(current => {
        if (current.TYPE === "Number" && sameNumber(current.value, oldValue)) matches.push(current);
    }));
    if (matches.length !== 1) throw new Error(`Expected one ${oldValue} literal, found ${matches.length}`);

    let replaced = false;
    return node.transform(new AST.TreeTransformer(current => {
        if (!replaced && current === matches[0]) {
            replaced = true;
            return parseExpression(expression);
        }
    }));
}

function assignments(ast, predicate) {
    const matches = [];
    ast.walk(new AST.TreeWalker(node => {
        if (node.TYPE === "Assign" && predicate(node)) matches.push(node);
    }));
    return matches;
}

function isStyleAssignment(node, property) {
    return node.left?.TYPE === "Dot"
        && node.left.property === property
        && node.left.expression?.TYPE === "Dot"
        && node.left.expression.property === "style";
}

function getLobbyResize(ast) {
    const candidates = [];
    ast.walk(new AST.TreeWalker(node => {
        if (node.TYPE !== "Assign" || node.operator !== "="
            || node.left.TYPE !== "Dot" || node.left.property !== "resize"
            || node.left.expression.TYPE !== "This" || node.right.TYPE !== "Function") return;

        const definitions = [];
        walkWithoutNestedFunctions(node.right, child => {
            if (child.TYPE === "VarDef" && child.value?.TYPE === "Call") {
                definitions.push({ node: child, values: numberValues(child.value) });
            }
        });
        const one = predicate => {
            const found = definitions.filter(({ values }) => predicate(values));
            return found.length === 1 ? found[0].node : null;
        };
        const targets = {
            title: one(values => values.some(value => sameNumber(value, 0.05))),
            teamRow: one(values => values.some(value => sameNumber(value, 0.06)) && values.some(value => sameNumber(value, 0.03))),
            mapRow: one(values => values.some(value => sameNumber(value, 0.08)) && values.some(value => sameNumber(value, 0.03))),
            footer: one(values => values.some(value => sameNumber(value, 0.02)) && values.some(value => sameNumber(value, 0.01))),
        };
        if (Object.values(targets).every(Boolean)) candidates.push(targets);
    }));
    if (candidates.length !== 1) throw new Error(`Expected one lobby resize function, found ${candidates.length}`);
    return candidates[0];
}

function patchHeights(ast) {
    const targets = getLobbyResize(ast);
    assertSingleNumber(targets.title.value, 0.05);
    assertSingleNumber(targets.teamRow.value, 0.06);
    assertSingleNumber(targets.teamRow.value, 0.03);
    assertSingleNumber(targets.mapRow.value, 0.08);
    assertSingleNumber(targets.mapRow.value, 0.03);
    assertSingleNumber(targets.footer.value, 0.02);
    assertSingleNumber(targets.footer.value, 0.01);
    targets.title.value = replaceNumber(targets.title.value, 0.05, `${setting} ? .034 : .05`);
    targets.teamRow.value = replaceNumber(targets.teamRow.value, 0.06, `${setting} ? .04 : .06`);
    targets.teamRow.value = replaceNumber(targets.teamRow.value, 0.03, `${setting} ? .02 : .03`);
    targets.mapRow.value = replaceNumber(targets.mapRow.value, 0.08, `${setting} ? .04 : .08`);
    targets.mapRow.value = replaceNumber(targets.mapRow.value, 0.03, `${setting} ? .02 : .03`);
    targets.footer.value = replaceNumber(targets.footer.value, 0.02, `${setting} ? .016 : .02`);
    targets.footer.value = replaceNumber(targets.footer.value, 0.01, `${setting} ? .007 : .01`);
}

function patchPlayerCardSpacing(ast) {
    const matches = assignments(ast, node => isStyleAssignment(node, "margin")
        && node.right.TYPE === "String"
        && node.right.value === "0.2em 0.2em 0.2em 0.2em");
    if (matches.length !== 1) throw new Error(`Expected one player card margin, found ${matches.length}`);
    const original = matches[0].right.print_to_string();
    matches[0].right = parseExpression(`${setting} ? "0.05em 0.1em" : ${original}`);
}

function patchPlayerCardWidth(ast) {
    const hasResponsiveWidth = node => {
        if (!isStyleAssignment(node, "width") || node.right.TYPE !== "Assign") return false;
        const maxWidth = node.right;
        if (!isStyleAssignment(maxWidth, "maxWidth") || maxWidth.right.TYPE !== "Conditional") return false;
        const strings = [];
        maxWidth.right.walk(new AST.TreeWalker(child => {
            if (child.TYPE === "String") strings.push(child.value);
        }));
        return strings.includes("10em") && strings.includes("9em");
    };
    const matches = assignments(ast, hasResponsiveWidth);
    if (matches.length === 0) {
        const alreadyFullWidth = assignments(ast, node => isStyleAssignment(node, "width")
            && node.right.TYPE === "Assign" && isStyleAssignment(node.right, "maxWidth")
            && node.right.right.TYPE === "String" && node.right.right.value === "100%");
        if (alreadyFullWidth.length > 0) return;
    }
    if (matches.length !== 1) throw new Error(`Expected one responsive player card width, found ${matches.length}`);
    const maxWidth = matches[0].right;
    maxWidth.right = parseExpression(`${setting} ? "100%" : ${maxWidth.right.print_to_string()}`);
}

function patchSummaryFont(ast) {
    const matches = assignments(ast, node => {
        if (!isStyleAssignment(node, "fontSize")) return false;
        const values = numberValues(node.right);
        return values.some(value => sameNumber(value, 0.02)) && values.some(value => sameNumber(value, 0.3));
    });
    if (matches.length !== 1) throw new Error(`Expected one lobby summary font size, found ${matches.length}`);
    matches[0].right = replaceNumber(matches[0].right, 0.02, `${setting} ? .018 : .02`);
}

function containsString(node, value) {
    let found = false;
    node.walk(new AST.TreeWalker(child => {
        if (child.TYPE === "String" && child.value === value) found = true;
    }));
    return found;
}

function patchSummaryText(ast) {
    const matches = [];
    ast.walk(new AST.TreeWalker(node => {
        if (node.TYPE !== "SimpleStatement" || node.body.TYPE !== "Assign") return;
        const assignment = node.body;
        if (assignment.left.TYPE !== "Dot" || assignment.left.property !== "textContent") return;
        if (["MP: ", "   SP: ", "   Lobby: "].every(label => containsString(assignment.right, label))) {
            matches.push({ statement: node, assignment });
        }
    }));
    if (matches.length !== 1) throw new Error(`Expected one lobby summary text assignment, found ${matches.length}`);
    const { statement, assignment } = matches[0];
    const firstSlot = assignment.left.clone(true);
    const slotIndices = [];
    firstSlot.walk(new AST.TreeWalker(node => {
        if (node.TYPE === "Sub" && node.property.TYPE === "Number" && node.property.value === 1) slotIndices.push(node.property);
    }));
    if (slotIndices.length !== 1) throw new Error(`Expected one summary slot index, found ${slotIndices.length}`);
    slotIndices[0].value = 0;

    const firstTarget = firstSlot.print_to_string();
    const summaryTarget = assignment.left.print_to_string();
    const summaryValue = assignment.right.print_to_string();
    statement.body = parseExpression(
        `${setting} ? (${firstTarget}=${summaryValue},${summaryTarget}="") : (${firstTarget}="Lobby",${summaryTarget}=${summaryValue})`
    );
}

function patchChatSpacing(ast) {
    const matches = assignments(ast, node => isStyleAssignment(node, "margin")
        && node.right.TYPE === "String" && node.right.value === "0.6em 0.6em");
    if (matches.length !== 1) throw new Error(`Expected one chat message margin, found ${matches.length}`);
    matches[0].right.value = "0.3em 0.6em";
}

function patchCurrentMapBold(ast) {
    const loops = [];
    ast.walk(new AST.TreeWalker(node => {
        if (node.TYPE !== "For" || node.init?.TYPE !== "Var" || node.condition?.TYPE !== "Binary" || node.condition.operator !== "<") return;
        const indexName = node.init.definitions?.[0]?.name?.name;
        if (!indexName || node.condition.left?.name !== indexName || node.condition.right?.TYPE !== "Number" || node.condition.right.value !== 4) return;

        const labels = [];
        walkWithoutNestedFunctions(node.body, child => {
            if (child.TYPE !== "Assign" || child.left?.TYPE !== "Sub" || child.left.expression?.TYPE !== "SymbolRef"
                || child.left.property?.TYPE !== "SymbolRef" || child.right?.TYPE !== "New" || child.right.args?.length !== 4) return;
            const [mapName, button, one, anotherOne] = child.right.args;
            if (mapName.TYPE !== "Sub" || button.TYPE !== "Dot" || button.property !== "button"
                || one.TYPE !== "Number" || one.value !== 1 || anotherOne.TYPE !== "Number" || anotherOne.value !== 1) return;
            labels.push({
                arrayName: child.left.expression.name,
                indexName: child.left.property.name,
                buttonArray: button.expression.print_to_string()
            });
        });
        if (labels.length === 1) loops.push({ loop: node, indexName, ...labels[0] });
    }));
    if (loops.length !== 1) throw new Error(`Expected one current map label loop, found ${loops.length}`);

    const { loop, indexName, arrayName } = loops[0];
    const functions = [];
    ast.walk(new AST.TreeWalker(node => {
        if (node.TYPE !== "Function") return;
        let containsLoop = false;
        walkWithoutNestedFunctions(node, child => { if (child === loop) containsLoop = true; });
        if (containsLoop) functions.push(node);
    }));
    if (functions.length !== 1) throw new Error(`Expected one map label update function, found ${functions.length}`);

    const selectedNames = new Set();
    walkWithoutNestedFunctions(functions[0], node => {
        if (node.TYPE === "VarDef" && node.value?.TYPE === "Sub" && node.value.property?.TYPE === "Number"
            && node.value.property.value === 0 && node.value.expression?.TYPE === "Dot" && node.value.expression.property === "ow") {
            selectedNames.add(node.name.name);
        }
    });
    if (selectedNames.size !== 1) throw new Error(`Expected one selected game mode index, found ${selectedNames.size}`);

    if (loop.body.TYPE !== "BlockStatement") throw new Error("Current map label loop body is not a block");
    const selectedName = [...selectedNames][0];
    loop.body.body.push(AST.parse(
        `${arrayName}[${indexName}].p2.style.setProperty("font-weight", ${indexName} === ${selectedName} ? "700" : "normal", "important");`
    ).body[0]);
    const selectedButton = loops[0].buttonArray.replace(/\[[^\]]+\]$/, `[${indexName}]`);
    loop.body.body.push(AST.parse(
        `${selectedButton}.button.style.setProperty("font-weight", ${indexName} === ${selectedName} ? "700" : "", "important");`
    ).body[0]);
}

function patchCurrentMapSummaryBold(ast) {
    const matches = [];
    ast.walk(new AST.TreeWalker(node => {
        if (node.TYPE !== "Function") return;
        let referencesMapSeed = false;
        const summaries = [];
        const buttonArrays = [];
        walkWithoutNestedFunctions(node, child => {
            if (child.TYPE === "Dot" && child.property === "mapSeed") referencesMapSeed = true;
            if (child.TYPE === "Dot" && child.property === "aFC" && child.expression?.TYPE === "SymbolRef") {
                buttonArrays.push(child.print_to_string());
            }
            if (child.TYPE !== "Assign" || child.left?.TYPE !== "Dot" || child.left.property !== "textContent") return;
            const button = child.left.expression;
            if (button?.TYPE !== "Dot" || button.property !== "button" || button.expression?.TYPE !== "Sub"
                || button.expression.property?.TYPE !== "Number" || button.expression.property.value !== 0) return;
            summaries.push(button.print_to_string());
        });
        if (referencesMapSeed && summaries.length === 1 && buttonArrays.length === 1) {
            matches.push({ node, buttonArray: buttonArrays[0] });
        }
    }));
    if (matches.length !== 1) throw new Error(`Expected one current map summary update, found ${matches.length}`);

    const { node, buttonArray } = matches[0];
    if (!Array.isArray(node.body)) throw new Error("Current map summary function body is not a statement list");
    node.body.unshift(AST.parse(
        `${buttonArray}[0].button.style.setProperty("font-weight", "700", "important");`
    ).body[0]);
}

/** Apply independently guarded lobby AST transforms; identifiers can change between minified builds. */
export function patchLobbyLayout(script) {
    const ast = AST.parse(script);
    const results = [];
    const apply = (id, transform) => {
        try {
            transform(ast);
            results.push({ id, applied: true });
        } catch (error) {
            results.push({ id, applied: false, reason: error.message });
        }
    };

    apply("lobby-heights-ast", patchHeights);
    apply("player-card-spacing-ast", patchPlayerCardSpacing);
    apply("player-card-width-ast", patchPlayerCardWidth);
    apply("lobby-summary-font-ast", patchSummaryFont);
    apply("lobby-summary-text-ast", patchSummaryText);
    apply("chat-message-spacing-ast", patchChatSpacing);
    apply("current-map-bold-ast", patchCurrentMapBold);
    apply("current-map-summary-bold-ast", patchCurrentMapSummaryBold);

    return { script: ast.print_to_string(), results };
}
