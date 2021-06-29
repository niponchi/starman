"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var request_1 = require("../request");
var path_1 = require("path");
var PingRequest = new request_1.StarmanRequestStep('Status 200')
    .Get('https://www.{{url}}')
    .AddQuery({
    v: '{{url}}',
    b: 'somethingกขอ'
})
    .AddTest(function (pm) {
    pm.response.to.have.status(200);
});
// Both Collection use the same request but different env
__1.default([function (runner) { return runner('Google should be alive', [PingRequest]); }], {
    url: 'google.com'
}, {
    outputDir: path_1.join(__dirname, './reusing-collections'),
    collectionName: 'google',
    environmentName: 'google'
});
__1.default([function (runner) { return runner('facebook should be alive', [PingRequest]); }], {
    url: 'facebook.com'
}, {
    outputDir: path_1.join(__dirname, './reusing-collections'),
    collectionName: 'facebook',
    environmentName: 'facebook'
});
//# sourceMappingURL=reusing.test.js.map