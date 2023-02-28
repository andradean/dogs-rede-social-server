import { Idatabase } from "./database.interface";

export interface IDatabaseModel extends Idatabase {
    createModel(name: string, properties: any): any,
    read(type: any, dataId: number, includes?: object): any,
    list(type: any, includes?: object): any,
    login(type: any, data: any): any,
    selectQuery(sql: string, replacements: any): any,
    readByWhere(type: any, userid: any, includes?: object): any,
    readbyMail(type: any, data: any): any,
    readByUsername(type: any, data: any): any
}