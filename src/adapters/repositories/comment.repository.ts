import * as Sequelize from 'sequelize'
import { IDatabaseModel } from '../../infrastructure/persistence/database.model.interface'
import { MysqlDatabase } from '../../infrastructure/persistence/mysql/mysql.database'
import commentModel from '../../infrastructure/persistence/mysql/models/comment.model'
import { ICommentRepository } from '../../domain/repositories/comment.repository.interface'
import { ICommentEntity } from '../../domain/entities/comment/comment.entity'


export class CommentRepository implements ICommentRepository {
    constructor(
        private _database:IDatabaseModel,
        private _commentModel: Sequelize.ModelCtor<Sequelize.Model<any, any>>
        ){}

    async create(resource: ICommentEntity): Promise<ICommentEntity> {
        const commentModel = await this._database.create(this._commentModel, resource)

        return commentModel
    }
}

export default new CommentRepository (
    MysqlDatabase.getInstance(),
    commentModel
)