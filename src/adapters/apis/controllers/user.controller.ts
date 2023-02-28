import express from 'express'
import debug from 'debug';
import  jwt  from 'jsonwebtoken';
import bcrypt from 'bcrypt'


import createUserUsecase from '../../../domain/usecases/users/create.user.usecase'
import loginUserUsecase from '../../../domain/usecases/users/login.user.usecase'
import { getErrorMessage } from '../helpers/errors.helper.adapter';
import secret from '../../../infrastructure/config/secret.config';


const log: debug.Debugger = debug('app: users-controller')


class userController {
    async createUser(req: express.Request, res: express.Response) {
        try { 
            const { username, email, password } = req.body
            const hash = bcrypt.hashSync(password, 10)
            const user = await createUserUsecase.execute({username, email, password: hash})
            log(user)
            return res.status(200).send()
        } catch(error) {
            return res.status(500).send(getErrorMessage(error))
           
        }
    }
    async login (req: express.Request, res: express.Response) {
        try {
            const user = await loginUserUsecase.execute(req.body) 
            const token = jwt.sign({
                userid: user.userid,
                username: user.username,
                email: user.email
            }, secret)

            return res.status(200).send({data: user, token})
        } catch(error) {
            return res.status(500).send(getErrorMessage(error))
        }
    }
}

export default new userController()