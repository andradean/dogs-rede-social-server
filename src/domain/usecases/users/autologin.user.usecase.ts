 import { IUsecase } from "../usecase.interface";
import UserRepository from "../../../adapters/repositories/user.repository";
import { IUserRepository } from "../../repositories/user.repository.interface";
import { IUserEntity } from "../../entities/users/user.entity";

class autoLoginUseCase implements IUsecase {
    constructor(private _repository: IUserRepository) {}
    
    async execute(data:{ userid: number } ):Promise<IUserEntity | undefined> {
        return await this._repository.readById(data.userid)
    }
    
}

export default new autoLoginUseCase( UserRepository ) 