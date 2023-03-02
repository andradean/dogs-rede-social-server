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
        
    async login(resource: IUserEntity) {
        try {
            const user = await this._database.login(this._userModel, resource)
            return user
        } catch (error) {
            console.error(error)
        }
    }
    async readByUsername(resource: string): Promise<IUserEntity | undefined> {
        try {
            const user = await this._database.readByUsername(this._userModel, resource)
            return user
        } catch(error) {
            console.error(error)
        }
    }
    async readByMail(resource: string): Promise<IUserEntity | undefined> {
        try {
            const user = await this._database.readByMail(this._userModel, resource) 
            return user
        } catch (error) {
          console.error(error)
        }
    }
    

    async create(resource: IUserEntity): Promise<IUserEntity> {
        const userModel = await this._database.create(this._userModel, resource)

        return userModel
    }
}

export default new UserRepository (
    MysqlDatabase.getInstance(),
    userModel
)