"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CreatePostmanEnvFromStarmanEnv(envs) {
    return {
        name: "API variables for testing",
        values: Object.keys(envs).map(function (k) {
            return {
                key: k,
                value: envs[k],
                "description": {
                    "content": "",
                    "type": "text/plain"
                },
                enabled: true,
            };
        }),
        id: "bcd28ee2-5a3c-42bd-8f47-77cfcf213d20",
    };
}
exports.CreatePostmanEnvFromStarmanEnv = CreatePostmanEnvFromStarmanEnv;
var toEvents = function (name, func) {
    if (!func || (Array.isArray(func) && func.length <= 0)) {
        return [];
    }
    return [
        {
            listen: name,
            script: {
                type: "text/javascript",
                exec: Array.isArray(func) ? func.filter(function (t) { return t; }).map(function (t) { return "(" + t + ")(pm);"; }) : "(" + func.toString() + ")(pm)",
            }
        }
    ];
};
function CreatePostmanCollectionItemFromStarmanRequest(step) {
    // Step body should be stringify
    // if body is just plain object
    if (typeof step.request.body === 'object' && step.request.body.mode === undefined) {
        step.request.body = {
            mode: "raw",
            raw: JSON.stringify(step.request.body)
        };
    }
    else if (typeof step.request.body === 'string') {
        step.request.body = {
            mode: "raw",
            raw: step.request.body
        };
    }
    var test = toEvents("test", step.test);
    var preRequest = toEvents("prerequest", step.preRequest);
    return {
        name: step.name,
        event: test.concat(preRequest),
        request: step.request,
    };
}
exports.CreatePostmanCollectionItemFromStarmanRequest = CreatePostmanCollectionItemFromStarmanRequest;
//# sourceMappingURL=runner.js.map