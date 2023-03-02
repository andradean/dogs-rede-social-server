import { IUserEntity } from "../entities/users/user.entity";

export interface IUserRepository {
    //readById (resourceId: number): Promise<IUserEntity | undefined>,
    readByMail (resource: {}): Promise<IUserEntity | undefined>,
    readByUsername (resource: {}): Promise<IUserEntity | undefined>,
    create (resource: IUserEntity): Promise<IUserEntity>,
   // deleteById (resourceId: number): Promise<void>,
   // list (): Promise<IUserEntity[]>
    login (resource: IUserEntity): Promise<IUserEntity>
    //autoLogin (resource: {}): Promise<IUserEntity>

}