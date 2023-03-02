/* import { IUsecase } from "../usecase.interface";
import UserRepository from "../../../adapters/repositories/user.repository";
import { IUserRepository } from "../../repositories/user.repository.interface";


class autoLoginUseCase implements IUsecase {
    constructor(private _repository: IUserRepository) {}
    async execute(data: { Authorization: string}) {
        return await this._repository.autoLogin(data)
    }
    
}

export default new autoLoginUseCase( UserRepository ) */