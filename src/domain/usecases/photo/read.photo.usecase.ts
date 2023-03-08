import { IUsecase } from "../usecase.interface";
import { IPhotoEntity } from "../../entities/photo/photo.entity";
import { IPhotoRepository } from "../../repositories/photo.repository.interface";
import photoRepository from "../../../adapters/repositories/photo.repository";



class createPhotoUseCase implements IUsecase {
   constructor (private _repository: IPhotoRepository) {}
   
   async execute ( data: {id: number} ): Promise<IPhotoEntity | undefined> {
        return await this._repository.readById( data.id )
    }
    
}

export default new createPhotoUseCase( photoRepository )