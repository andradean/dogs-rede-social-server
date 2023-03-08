import * as Sequelize from 'sequelize'
import { IUserEntity } from '../../domain/entities/users/user.entity'
import { IDatabaseModel } from '../../infrastructure/persistence/database.model.interface'
import { MysqlDatabase } from '../../infrastructure/persistence/mysql/mysql.database'
import photoModel from '../../infrastructure/persistence/mysql/models/photo.model'
import { IPhotoRepository } from '../../domain/repositories/photo.repository.interface'
import { IPhotoEntity } from '../../domain/entities/photo/photo.entity'


export class PhotoRepository implements IPhotoRepository {
    constructor(
        private _database:IDatabaseModel,
        private _photoModel: Sequelize.ModelCtor<Sequelize.Model<any, any>>
        ){}

    async create(resource: IPhotoEntity): Promise<IPhotoEntity> {
        const photoModel = await this._database.create(this._photoModel, resource)

        return photoModel
    }

    async list(resource: {}): Promise<IPhotoEntity[]> {
        const photoModel = await this._database.list(this._photoModel, resource)

        return photoModel
    }

    async readById(resourceId: number): Promise<IPhotoEntity> {
        const photoModel = await this._database.read(this._photoModel, resourceId)

        return photoModel
    }
}

export default new PhotoRepository (
    MysqlDatabase.getInstance(),
    photoModel
)