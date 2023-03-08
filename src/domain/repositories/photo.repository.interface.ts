import { IPhotoEntity } from "../entities/photo/photo.entity";

export interface IPhotoRepository {
  //  readById (resourceId: number): Promise<IPhotoEntity | undefined>,
 //   readByMail (resource: {}): Promise<IPhotoEntity | undefined>,
   // readByUsername (resource: {}): Promise<IPhotoEntity | undefined>,
    create (resource: IPhotoEntity): Promise<IPhotoEntity>,
   // deleteById (resourceId: number): Promise<void>,
   // list (): Promise<IUserEntity[]>
}