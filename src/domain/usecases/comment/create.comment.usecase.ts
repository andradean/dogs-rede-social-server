import { ICommentEntity } from "../../entities/comment/comment.entity";
import { IUsecase } from "../usecase.interface";
import commentRepository from "../../../adapters/repositories/comment.repository";
import { ICommentRepository } from "../../repositories/comment.repository.interface";

class createCommentUseCase implements IUsecase {
   constructor (private _repository: ICommentRepository) {}
   
   async execute ( data: ICommentEntity ): Promise<ICommentEntity | undefined> {
        return await this._repository.create( data )
    }
    
}

export default new createCommentUseCase( commentRepository )