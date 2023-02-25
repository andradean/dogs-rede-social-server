import * as Sequelize from 'sequelize'
import { IUserRepository } from '../../domain/repositories/user.repository.interface'
import { IUserEntity } from '../../domain/entities/users/user.entity'
import { IDatabaseModel } from '../../infrastructure/persistence/database.model.interface'
import { MysqlDatabase } from '../../infrastructure/persistence/mysql/mysql.database'
import userModel from '../../infrastructure/persistence/mysql/models/user.model'


export class UserRepository implements IUserRepository {
    constructor(
        private _database:IDatabaseModel,
        private _userModel: Sequelize.ModelCtor<Sequelize.Model<any, any>>
        ){}

    async create(resource: IUserEntity): Promise<IUserEntity> {
        const userModel = await this._database.create(this._userModel, resource)

        return userModel
    }
}

export default new UserRepository (
    MysqlDatabase.getInstance(),
    userModel
)