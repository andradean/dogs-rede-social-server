import express from 'express'
import debug from 'debug';
import createPhotoUsecase from '../../../domain/usecases/photo/create.photo.usecase';

const log: debug.Debugger = debug('app: users-controller')

class photoController {
    async postPhoto (req: express.Request, res: express.Response) {
        const userid = Number(req.userid)
        const img = req.file?.filename
        const {name, age, weight} = req.body
        
        const photo = await createPhotoUsecase.execute({userid, img, name, age, weight})
        
        console.log(name, age, weight)
        return res.json(req.file?.filename)
    }
}

export default new photoController()