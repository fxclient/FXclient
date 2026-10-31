import UglifyJS from "uglify-js";

const hasNumber = (values, target) => values.some(value => Math.abs(value - target) < 1e-9);

function getNumbers(node) {
    const values = [];
    node.walk(new UglifyJS.TreeWalker(current => {
        if (current.TYPE === "Number") values.push(current.value);
    }));
    return values;
}

function replaceNumber(node, oldValue, expression) {
    let replaced = 0;
    const transformed = node.transform(new UglifyJS.TreeTransformer(current => {
        if (current.TYPE !== "Number" || Math.abs(current.value - oldValue) >= 1e-9) return;
        replaced++;
        return UglifyJS.parse(expression).body[0].body;
    }));
    if (replaced !== 1) throw new Error(`Expected one ${oldValue} literal, found ${replaced}`);
    return transformed;
}

/** Find and compact the lobby resize formulas without relying on minifier variable names. */
export function compactLobbyHeights(script) {
    const ast = UglifyJS.parse(script);
    const resizeFunctions = [];
    ast.walk(new UglifyJS.TreeWalker(node => {
        if (node.TYPE === "Assign" && node.operator === "="
            && node.left.TYPE === "Dot" && node.left.property === "resize"
            && node.left.expression.TYPE === "This" && node.right.TYPE === "Function") {
            resizeFunctions.push(node.right);
        }
    }));

    const candidates = [];
    for (const resizeFunction of resizeFunctions) {
        const definitions = [];
        resizeFunction.walk(new UglifyJS.TreeWalker(node => {
            if (node !== resizeFunction && ["Function", "Arrow"].includes(node.TYPE)) return true;
            if (node.TYPE === "VarDef" && node.value?.TYPE === "Call") {
                definitions.push({ node, numbers: getNumbers(node.value) });
            }
        }));
        const one = predicate => {
            const matches = definitions.filter(({ numbers }) => predicate(numbers));
            return matches.length === 1 ? matches[0].node : null;
        };
        const targets = {
            title: one(numbers => hasNumber(numbers, 0.05)),
            teamRow: one(numbers => hasNumber(numbers, 0.06) && hasNumber(numbers, 0.03)),
            mapRow: one(numbers => hasNumber(numbers, 0.08) && hasNumber(numbers, 0.03)),
            footer: one(numbers => hasNumber(numbers, 0.02) && hasNumber(numbers, 0.01)),
        };
        if (Object.values(targets).every(Boolean)) candidates.push(targets);
    }

    if (candidates.length !== 1) {
        throw new Error(`Expected one lobby resize function, found ${candidates.length}`);
    }
    const targets = candidates[0];
    targets.title.value = replaceNumber(targets.title.value, 0.05,
        "__fx.settings.enhancedLobbyLayout ? .034 : .05");
    targets.teamRow.value = replaceNumber(targets.teamRow.value, 0.06,
        "__fx.settings.enhancedLobbyLayout ? .04 : .06");
    targets.teamRow.value = replaceNumber(targets.teamRow.value, 0.03,
        "__fx.settings.enhancedLobbyLayout ? .02 : .03");
    targets.mapRow.value = replaceNumber(targets.mapRow.value, 0.08,
        "__fx.settings.enhancedLobbyLayout ? .04 : .08");
    targets.mapRow.value = replaceNumber(targets.mapRow.value, 0.03,
        "__fx.settings.enhancedLobbyLayout ? .02 : .03");
    targets.footer.value = replaceNumber(targets.footer.value, 0.02,
        "__fx.settings.enhancedLobbyLayout ? .016 : .02");
    targets.footer.value = replaceNumber(targets.footer.value, 0.01,
        "__fx.settings.enhancedLobbyLayout ? .007 : .01");

    return ast.print_to_string();
}
