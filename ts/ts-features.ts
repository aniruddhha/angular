import { Connector, Device } from "./device.js"

let nm: string = 'abc'
let num: number = 10
let fn: (() => void) = () => { console.log('this is fn') }
let bl: boolean = true
let obj: {} = {
    tm: 10,
    se: 'live'
}
let gb: any = () => { }
let mx: number | string = 'mixed'
let tp: [string, boolean, () => void] = ['', true, () => { }]
let em: Connector = Connector.MONGO
let dv: Device = new Device()
dv.signal()
