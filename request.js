"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var querystring_1 = require("querystring");
var StarmanRequestStep = /** @class */ (function () {
    function StarmanRequestStep(name) {
        this.name = '';
        this.test = [];
        this.preRequest = [];
        this.request = {
            url: '',
            method: 'GET',
            header: []
        };
        this.name = name;
    }
    StarmanRequestStep.prototype.reloadURL = function () {
        if (this.query) {
            this.request.url = this.request.url + "?" + this.query;
        }
    };
    StarmanRequestStep.prototype.AddQuery = function (query) {
        this.query = querystring_1.stringify(query, "&", "=", {
            encodeURIComponent: function (v) {
                if (/\{\{.*\}\}/.test(v)) {
                    return v;
                }
                else {
                    return encodeURIComponent(v);
                }
            }
        });
        this.request.query = Object.keys(query).map(function (key) {
            return {
                key: key,
                value: query[key] + ""
            };
        });
        this.reloadURL();
        return this;
    };
    StarmanRequestStep.prototype.Get = function (url) {
        this.request.url = url;
        this.request.method = 'GET';
        this.reloadURL();
        return this;
    };
    StarmanRequestStep.prototype.Post = function (url) {
        this.request.url = url;
        this.request.method = 'POST';
        this.reloadURL();
        return this;
    };
    StarmanRequestStep.prototype.Put = function (url) {
        this.request.url = url;
        this.request.method = 'PUT';
        this.reloadURL();
        return this;
    };
    StarmanRequestStep.prototype.Delete = function (url) {
        this.request.url = url;
        this.request.method = 'DELETE';
        this.reloadURL();
        return this;
    };
    StarmanRequestStep.prototype.AddHeader = function (key, value) {
        this.request.header.push({
            key: key,
            value: value
        });
        return this;
    };
    StarmanRequestStep.prototype.AddBody = function (body) {
        this.request.body = body;
        return this;
    };
    StarmanRequestStep.prototype.AddTest = function (test) {
        this.test.push(test);
        return this;
    };
    StarmanRequestStep.prototype.AddPreRequest = function (preRequest) {
        this.preRequest.push(preRequest);
        return this;
    };
    return StarmanRequestStep;
}());
exports.StarmanRequestStep = StarmanRequestStep;
//# sourceMappingURL=request.js.map