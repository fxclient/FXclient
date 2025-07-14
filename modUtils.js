// @ts-check
import UglifyJS from 'uglify-js';

// https://stackoverflow.com/a/63838890
const escapeRegExp = (/** @type {string} */ string) => string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');

export function minifyCode(/** @type {string} */ script) {
    // "return" statements outside of a function throw a parse error
    script = "()=>{" + script + "}";
    const output = UglifyJS.minify(script, {
        compress: false,
        mangle: false,
        output: { comments: /\.{3}/ } // preserve `/*...*/` comments
    });
    if (output.error) throw output.error;
    if (output.warnings) throw (output.warnings);
    if (output.warnings) console.warn(output.warnings);
    let code = output.code;
    if (code.endsWith(";")) code = code.slice(0, -1);
    code = code.slice(5, -1); // unwrap from function
    // to allow finding a function without having to include all of its code:
    code = code.split("/*...*/")[0].trim();
    return code;
}

class ModUtils {
    script = "";
    /** @type {{[key: string]: string}} */
    dictionary = {};
    safeDictionary = new Proxy(this.dictionary, {
        get(target, prop) {
            if (typeof prop === 'symbol') prop = prop.toString();
            if (prop in target) return target[prop];
            throw new Error(`Property ${prop} is not defined in dictionary`);
        }
    });
    /** @type {Function[]} */
    postMinifyHandlers = [];

    constructor(/** @type {string} */ script) {
        this.script = script;
        // Bind methods
        this.matchDictionaryExpression = this.matchDictionaryExpression.bind(this);
        this.generateRegularExpression = this.generateRegularExpression.bind(this);
        this.replace = this.replace.bind(this);
        this.replaceOne = this.replaceOne.bind(this);
        this.replaceRawCode = this.replaceRawCode.bind(this);
        this.matchOne = this.matchOne.bind(this);
        this.matchRawCode = this.matchRawCode.bind(this);
        this.replaceCode = this.replaceCode.bind(this);
        this.waitForMinification = this.waitForMinification.bind(this);
        this.matchCode = this.matchCode.bind(this);
        this.insertCode = this.insertCode.bind(this);
    }
    
    /** @param {RegExp} expression */
    matchDictionaryExpression(expression) {
        const result = this.matchOne(expression);
        // @ts-ignore
        for (let [key, value] of Object.entries(result.groups)) this.addToDictionary(key, value);
    }
    replace(/** @type {Parameters<typeof String.prototype.replace>} */ ...args) {
        return this.script = this.script.replace(...args);
    };
    /** Expressions passed to this function must have the global flag set. */
    matchOne(/** @type {RegExp} */ expression) {
        const result = expression.exec(this.script);
        if (result === null) throw new Error("no match for: " + expression.toString());
        if (expression.exec(this.script) !== null) throw new Error("more than one match for: " + expression.toString());
        return result;
    };
    addToDictionary(/** @type {string} */ key, /** @type {string} */ value) {
        if (this.dictionary[key] !== undefined && this.dictionary[key] !== value)
            throw new Error("name different from existing one:\n  KEY: " + key + "\n  VALUE: " + value + "\n  Value in dictionary: " + this.dictionary[key]);
        this.dictionary[key] = value;
    };
    /**
     * @param {RegExp} expression
     * @param {string} replaceValue
     */
    replaceOne(expression, replaceValue) {
        const result = this.matchOne(expression);
        // this (below) works correctly because expression.lastIndex gets reset above in matchOne when there is no match
        this.script = this.script.replace(expression, replaceValue);
        return result;
    };

    // Return value example:
    // When replaceRawCode or matchRawCode are called with "var1=var2+1;" as the code
    // and this matches "a=b+1;", the returned value will be the object: { var1: "a", var2: "b" }
    /** @param {{ [x: string]: string; }} [nameMappings] */
    replaceRawCode(/** @type {string} */ raw, /** @type {string} */ result, nameMappings) {
        const { expression, groups } = this.generateRegularExpression(raw, false, nameMappings);
        let localizerCount = 0;
        let replacementString = result.replaceAll("$", "$$").replaceAll("__L()", "__L)").replaceAll("__L(", "__L,")
            .replace(/\w+/g, match => {
                if (nameMappings !== undefined && nameMappings.hasOwnProperty(match)) return nameMappings[match];
                // these would get stored as "___localizer1", "___localizer2", ...
                if (match === "__L") match = "___localizer" + (++localizerCount);
                return groups.hasOwnProperty(match) ? "$" + groups[match] : match;
            });
        let expressionMatchResult;
        try { expressionMatchResult = this.replaceOne(expression, replacementString); }
        catch (e) {
            throw new Error("replaceRawCode match error:\n\n" + e + "\n\nRaw code: " + raw + "\n");
        }
        return Object.fromEntries(Object.entries(groups).map(([identifier, groupNumber]) => [identifier, expressionMatchResult[groupNumber]]));
    }
    matchRawCode(/** @type {string} */ raw, nameMappings) {
        const { expression, groups } = this.generateRegularExpression(raw, false, nameMappings);
        try {
            const expressionMatchResult = this.matchOne(expression);
            return Object.fromEntries(Object.entries(groups).map(
                ([identifier, groupNumber]) => [identifier, expressionMatchResult[groupNumber]]
            ));
        } catch (e) {
            throw new Error("matchRawCode match error:\n\n" + e + "\n\nRaw code: " + raw + "\n");
        }
    }
    generateRegularExpression(/** @type {string} */ code, /** @type {boolean} */ isForDictionary, nameMappings) {
        const groups = {};
        let groupNumberCounter = 1;
        let localizerCount = 0;
        let raw = escapeRegExp(code).replaceAll("__L\\(\\)", "___localizer\\)")
            // when there is a parameter, add a comma to separate it from the added number
            .replaceAll("__L\\(", "___localizer,");
        raw = raw.replace(isForDictionary ? /(?:@@)*(@?)(\w+)/g : /()(\w+)/g, (_match, modifier, word) => {
            // if a substitution string for the "word" is specified in the nameMappings, use it
            if (nameMappings && nameMappings.hasOwnProperty(word)) return nameMappings[word];
            // if the "word" is a number or is one of these specific words, ingore it
            if (/^\d/.test(word) || ["return", "this", "var", "function", "new", "Math", "WebSocket"].includes(word)) return word;
            // for easy localizer function matching
            else if (word === "___localizer") {
                groups[word + (++localizerCount)] = groupNumberCounter++;
                return "\\b(L\\(\\d+)"; // would match "L(123", "L(50" and etc. when using "__L("
            }
            else if (groups.hasOwnProperty(word)) return "\\" + groups[word]; // regex numeric reference to the group
            else {
                groups[word] = groupNumberCounter++;
                return modifier === "@" ? `(?<${word}>\\w+)` : "(\\w+)";
            }
        });
        let expression = new RegExp(isForDictionary ? raw.replaceAll("@@", "@") : raw, "g");
        return { expression, groups };
    }

    /**
     * @typedef {{ dictionary?: { [x: string]: string } }} BaseOptions
     * @typedef {BaseOptions & { addToDictionary?: string[] }} MatchCodeOptions
     */
    matchCode(code, /** @type {MatchCodeOptions=} */ options) {
        const result = this.matchRawCode(minifyCode(code));
        if (options?.addToDictionary !== undefined) {
            options.addToDictionary.forEach(varName => {
                if (result[varName] === undefined)
                    throw new Error(`matchCode addToDictionary error: ${varName} was undefined in the match results`)
                this.addToDictionary(varName, result[varName]);
            });
        }
        return result;
    }

    replaceCode(/** @type {string} */ code, /** @type {string} */ replacement, /** @type {BaseOptions=} */ options) {
        replacement = replacement.split("/*...*/")[0];
        return this.replaceRawCode(minifyCode(code), replacement, options?.dictionary);
    }
    
    /**
     * @param {string} code
     * @param {string} codeToInsert
     * @param {BaseOptions} [options]
     */
    insertCode(code, codeToInsert, options) {
        const insertionPoint = "/* here */";
        if (!code.includes(insertionPoint)) throw new Error("insertCode: No insertion point found");
        return this.replaceCode(code.replace(insertionPoint, ""), code.replace(insertionPoint, codeToInsert), options);
    }

    waitForMinification(/** @type {Function} */ handler) {
        this.postMinifyHandlers.push(handler);
    }
    executePostMinifyHandlers() {
        this.postMinifyHandlers.forEach(handler => handler());
    }
    escapeRegExp = escapeRegExp
}

export default ModUtils;