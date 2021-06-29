"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var path_1 = require("path");
var __2 = require("..");
var index_1 = require("../index");
var express = require('express');
var app = express();
app.get('/some', function (req, res) {
    console.log(req.query);
    res.json(req.query);
});
var instance = app.listen(9912, function () {
    console.log('app start :9912');
});
function start() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __1.default([
                        function (runner) {
                            runner('Localhost test', [
                                new __2.StarmanRequestStep('Should return query').Get('http://localhost:9912/some')
                                    .AddQuery({
                                    x: "10"
                                })
                                    .AddTest(function (pm) {
                                    pm.expect(pm.response.json().x).to.be.eql("10");
                                    pm.expect(pm.environment.get("predefined")).to.be.eql("234.56");
                                })
                                    .AddPreRequest(function (pm) {
                                    pm.environment.set("predefined", "234.56");
                                })
                            ]);
                            runner('Google should be alive', [
                                // << This is folder name
                                new __2.StarmanRequestStep('Just call google.com') // << This is request name
                                    .Get("https://www." + index_1.StringVar('url'))
                                    .AddQuery({
                                    test: '19'
                                })
                                    .AddTest(function (pm) {
                                    pm.test('Google.com must return 200 status', function () {
                                        // << Write test here !
                                        pm.response.to.have.status(200);
                                    });
                                })
                            ]);
                        }
                    ], {
                        url: 'google.com'
                    }, {
                        outputDir: path_1.join(__dirname, './basic-collections')
                    })];
                case 1:
                    _a.sent();
                    instance.close();
                    return [2 /*return*/];
            }
        });
    });
}
start();
//# sourceMappingURL=basic.test.js.map