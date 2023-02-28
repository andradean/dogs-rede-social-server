import { IUsecase } from "../usecase.interface";
import { IUserEntity } from '../../entities/users/user.entity'
import { IUserRepository } from "../../repositories/user.repository.interface";
import  UserRepository  from "../../../adapters/repositories/user.repository";

class readUser implements IUsecase {
    constructor (private _repository: IUserRepository){}
    async execute(data: {email:string }): Promise<IUserEntity | undefined> {
        return await this._repository.readByMail(data);
    }
    
}

export default new readUser( UserRepository )