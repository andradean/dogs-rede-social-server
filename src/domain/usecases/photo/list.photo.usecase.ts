import { IPhotoEntity } from "../../entities/photo/photo.entity";
import { IPhotoRepository } from "../../repositories/photo.repository.interface";
import { IUsecase } from "../usecase.interface";
import photoRepository from "../../../adapters/repositories/photo.repository";

class listPhotoUseCase implements IUsecase {
    constructor(private _repository: IPhotoRepository) {}

    async execute(data: {offset: number, limit: number}): Promise<IPhotoEntity[] | undefined> {
        return await this._repository.list(data);
    }
}

export default new listPhotoUseCase(
    photoRepository
);