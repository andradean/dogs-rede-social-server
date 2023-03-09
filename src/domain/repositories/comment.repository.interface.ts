import { ICommentEntity } from "../entities/comment/comment.entity";

export interface ICommentRepository {
    create (resource: ICommentEntity): Promise<ICommentEntity>,

  
}