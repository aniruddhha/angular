"use strict";
exports.__esModule = true;
var device_1 = require("./device");
var nm = 'abc';
var num = 10;
var fn = function () { console.log('this is fn'); };
var bl = true;
var obj = {
    tm: 10,
    se: 'live'
};
var gb = function () { };
var mx = 'mixed';
var tp = ['', true, function () { }];
var em = device_1.Connector.MONGO;
var dv = new device_1.Device();
dv.signal();
