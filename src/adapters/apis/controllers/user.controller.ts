import express from 'express'
import debug from 'debug';
import createUserUsecase from '../../../domain/usecases/users/create.user.usecase'
import { getErrorMessage } from '../helpers/errors.helper.adapter';


const log: debug.Debugger = debug('app: users-controller')


class userController {
    async createUser(req: express.Request, res: express.Response) {
        try { 
            const user = await createUserUsecase.execute(req.body)
            return res.status(200).send()
        } catch(error) {
            return res.status(500).send(getErrorMessage(error))
           
        }
    }
}

export default new userController()