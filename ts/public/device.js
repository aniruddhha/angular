export class Device {
    signal() {
        console.log(`Battery Level Changed`);
    }
}
export var Connector;
(function (Connector) {
    Connector[Connector["MYSQL"] = 0] = "MYSQL";
    Connector[Connector["MSSQL"] = 1] = "MSSQL";
    Connector[Connector["MONGO"] = 2] = "MONGO";
})(Connector || (Connector = {}));
