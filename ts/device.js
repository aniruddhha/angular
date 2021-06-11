"use strict";
exports.__esModule = true;
exports.Connector = exports.Device = void 0;
var Device = /** @class */ (function () {
    function Device() {
    }
    Device.prototype.signal = function () {
        console.log("Battery Level Changed");
    };
    return Device;
}());
exports.Device = Device;
var Connector;
(function (Connector) {
    Connector[Connector["MYSQL"] = 0] = "MYSQL";
    Connector[Connector["MSSQL"] = 1] = "MSSQL";
    Connector[Connector["MONGO"] = 2] = "MONGO";
})(Connector = exports.Connector || (exports.Connector = {}));
