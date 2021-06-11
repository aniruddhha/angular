import { Connector, Device } from "./device.js";
let nm = 'abc';
let num = 10;
let fn = () => { console.log('this is fn'); };
let bl = true;
let obj = {
    tm: 10,
    se: 'live'
};
let gb = () => { };
let mx = 'mixed';
let tp = ['', true, () => { }];
let em = Connector.MONGO;
let dv = new Device();
dv.signal();
