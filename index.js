"use strict";
/*
 * Maintainer
 * - rungsikorn.r@digithunworldwide.com
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var runner_1 = require("./runner");
var fs = require('fs');
var path = require('path');
var newman = require('newman');
function Starman(steps, environment, options) {
    if (options === void 0) { options = {}; }
    var collection = {
        info: {
            name: options.collectionName || 'API Collections E2E testing',
            descriptions: '',
            schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
        },
        item: []
    };
    var env = runner_1.CreatePostmanEnvFromStarmanEnv(environment);
    if (options.environmentName) {
        env.name = options.environmentName;
    }
    steps.forEach(function (p) {
        p(function (name, steps) {
            collection.item.push({
                name: name,
                item: steps.map(runner_1.CreatePostmanCollectionItemFromStarmanRequest)
            });
        });
    });
    return new Promise(function (resolve, reject) {
        newman.run({
            collection: collection,
            environment: env,
            reporters: 'cli'
        }, function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
            if (options.outputDir) {
                fs.writeFileSync(path.join(options.outputDir, "./" + (options.collectionName || 'postman') + ".collection.json"), JSON.stringify(collection, null, ' '));
                fs.writeFileSync(path.join(options.outputDir, "./" + (options.environmentName || 'postman') + ".variables.json"), JSON.stringify(env, null, ' '));
            }
        });
    });
}
exports.default = Starman;
function StringVar(name) {
    return "{{" + name + "}}";
}
exports.StringVar = StringVar;
function NumberVar(name) {
    // @ts-ignore
    return "{{" + name + "}}";
}
exports.NumberVar = NumberVar;
__export(require("./request"));
__export(require("./runner"));
//# sourceMappingURL=index.js.map