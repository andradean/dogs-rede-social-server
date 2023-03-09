import express from 'express'
import debug from 'debug';
import  jwt  from 'jsonwebtoken';
import bcrypt from 'bcrypt'


import createUserUsecase from '../../../domain/usecases/users/create.user.usecase'
import loginUserUsecase from '../../../domain/usecases/auth/login.user.usecase'
import { getErrorMessage } from '../helpers/errors.helper.adapter';
import secret from '../../../infrastructure/config/secret.config';
import autoLoginUseCase from '../../../domain/usecases/users/autologin.user.usecase';


const log: debug.Debugger = debug('app: users-controller')


class userController {
    async getUserById(req: express.Request, res: express.Response){
        try {
            const userid = Number(req.userid)
            console.log(userid)
            const user = await autoLoginUseCase.execute({ userid })
            res.status(200).send(user)
        } catch(error) {
            return res.status(500).send("Erro interno, tente mais tarde")
        }

    }
    async createUser(req: express.Request, res: express.Response) {
        try { 
            const { username, email, password } = req.body
            const hash = bcrypt.hashSync(password, 10)
            const user = await createUserUsecase.execute({username, email, password: hash})
            log(user)
            return res.status(200).send()
        } catch(error) {
            return res.status(500).send("Erro interno, tente mais tarde")
           
        }
    }
    async login (req: express.Request, res: express.Response) {
        try {
            const user = await loginUserUsecase.execute(req.body) 
            console.log(user.userid)
            const token = jwt.sign({
                userid: user.userid,
                username: user.username,
                email: user.email
            }, secret)
            console.log("ESSE", user)
            return res.status(200).send({data: user, token})
        } catch(error) {
            return res.status(500).send("Erro interno, tente mais tarde")
        }
    }

    async autoLogin (req: express.Request, res: express.Response) {
        try {
            const auth  = req.headers.authorization
            if(!auth) {
                return res.status(401).send("Não autorizado")
            }
            console.log(auth)
            const parts = auth.split(" ")
            const [schema, token] = parts

            jwt.verify(token, secret, (error, decoded) => {
                if(error) {
                    res.status(401).send("Não autorizado")
                }
                console.log(decoded)

                return res.status(200).send()
            })
        } catch(error) {
            return res.status(500).send("Erro interno, tente mais tarde")

        }
    
    }
     
   
        }
    


export default new userController()