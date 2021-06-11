export class Device implements PowerManager {
    signal(): void {
        console.log(`Battery Level Changed`)
    }
}

export interface PowerManager {
    signal(): void
}

export enum Connector {
    MYSQL,
    MSSQL,
    MONGO
}