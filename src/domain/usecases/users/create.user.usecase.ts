import { IUsecase } from "../usecase.interface";
import { IUserEntity } from "../../entities/users/user.entity";
import { IUserRepository } from "../../repositories/user.repository.interface";
import  UserRepository  from '../../../adapters/repositories/user.repository'



class createUserUseCase implements IUsecase {
   constructor (private _repository: IUserRepository) {}
   
   async execute(data: IUserEntity): Promise<IUserEntity | undefined> {
        return await this._repository.create(data)
    }
    
}

export default new createUserUseCase( UserRepository )