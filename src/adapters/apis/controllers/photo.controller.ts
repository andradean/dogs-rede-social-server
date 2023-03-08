import express from 'express'
import debug from 'debug';
import fs from 'fs';
import path from 'path';
import createPhotoUsecase from '../../../domain/usecases/photo/create.photo.usecase';
import listPhotoUsecase from '../../../domain/usecases/photo/list.photo.usecase';
import readPhotoUsecase from '../../../domain/usecases/photo/read.photo.usecase';

const log: debug.Debugger = debug('app: users-controller')

class photoController {
    async postPhoto (req: express.Request, res: express.Response) {
        const userid = Number(req.userid)
        const author = req.username
        const img = req.file?.filename
        const { nome, idade, peso } = req.body
        
        const photo = await createPhotoUsecase.execute({userid, author, src:`http://localhost:8000/${img}`, title: nome, idade, peso})
        console.log(photo)
        console.log(nome, idade, peso, img, author)
        return res.json(req.file?.filename)
    }

    async listPhoto (req: express.Request, res: express.Response) {
        const page = req.query._page || 1
        const total = req.query._total || 6 

        const startIndex = (Number(page) - 1) * Number(total)

        const photos = await listPhotoUsecase.execute({
            offset: startIndex,
            limit: Number(total)
        })

        res.send(photos)

    }

    async readPhoto (req: express.Request, res: express.Response) {
        const photo = await readPhotoUsecase.execute({
            id: Number(req.params.id)
        })

        res.status(200).send(photo)
    }

    
    
}

export default new photoController()