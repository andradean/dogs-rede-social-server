import { IUsecase } from "../usecase.interface";
import { IUserEntity } from '../../entities/users/user.entity'
import { IUserRepository } from "../../repositories/user.repository.interface";
import  UserRepository  from "../../../adapters/repositories/user.repository";

class readUsernameUseCase implements IUsecase {
    constructor (private _repository: IUserRepository){}
    
    async execute(data: {username: string} ): Promise<IUserEntity | undefined> {
        return await this._repository.readByUsername(data);
    }
    
}

export default new readUsernameUseCase( UserRepository )