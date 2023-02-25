import { IUserEntity } from "../entities/users/user.entity";

export interface IUserRepository {
    //readById (resourceId: number): Promise<IUserEntity | undefined>,
    create (resource: IUserEntity): Promise<IUserEntity>,
   // deleteById (resourceId: number): Promise<void>,
   // list (): Promise<IUserEntity[]>

}