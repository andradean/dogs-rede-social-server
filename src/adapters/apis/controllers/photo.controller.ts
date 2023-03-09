import express from 'express'
import debug from 'debug';
import fs from 'fs';
import path from 'path';
import createPhotoUsecase from '../../../domain/usecases/photo/create.photo.usecase';
import listPhotoUsecase from '../../../domain/usecases/photo/list.photo.usecase';
import readPhotoUsecase from '../../../domain/usecases/photo/read.photo.usecase';
import { getErrorMessage } from '../helpers/errors.helper.adapter';


const log: debug.Debugger = debug('app: users-controller')

class photoController {
    async createPhoto (req: express.Request, res: express.Response) {
        try {
            const userid = Number(req.userid)
            const author = req.username
            const img = req.file?.filename
            const { nome, idade, peso } = req.body
        
            const photo = await createPhotoUsecase.execute({
                userid, 
                author, 
                src:`http://localhost:8000/${img}`, 
                title: nome, 
                idade, 
                peso}
                )
                
            console.log(photo)
            console.log(nome, idade, peso, img, author)
            return res.status(201).send() 
        } catch (error) {
            return res.status(500).send("Erro interno, tente mais tarde")
      }
    }

    async getPhotos (req: express.Request, res: express.Response) {
        try {
            const page = req.query._page || 1
            const total = req.query._total || 6 

            const startIndex = (Number(page) - 1) * Number(total)

            const photos = await listPhotoUsecase.execute({
            offset: startIndex,
            limit: Number(total)
        })
            res.status(200).send(photos)
        } catch(error) {
            return res.status(500).send("Erro interno, tente mais tarde")

        }

    }

    async getPhotoById (req: express.Request, res: express.Response) {
        try {
            const photo = await readPhotoUsecase.execute({
                id: Number(req.params.id)
            })

        res.status(200).send(photo)
        } catch(error) {
            return res.status(500).send("Erro interno, tente mais tarde")

        }

    }

    
    
}

export default new photoController()