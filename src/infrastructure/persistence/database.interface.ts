export interface Idatabase {
    list(type: any): any[],
    create(type: any, data:any): any,
    read(type:any, dataId: any): any,
    update(type: any, dataId: any): any,
    delete(type:any, dataId:any): any
}