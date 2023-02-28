import { IUserEntity } from "../../entities/users/user.entity";
import { IUsecase } from "../usecase.interface";
import { IUserRepository } from "../../repositories/user.repository.interface";
import  UserRepository  from "../../../adapters/repositories/user.repository";

class loginUseCase implements IUsecase {
    constructor(private  _repository: IUserRepository){}
    
    async execute(data: { username: string, password: string }) {
        return await this._repository.login(data);
    }
    
}

export default new loginUseCase ( UserRepository )