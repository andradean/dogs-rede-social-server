import express from 'express'
import { validate, Joi, ValidationError } from 'express-validation'
//import IAuth from './helpers/auth.helper'
import loginUseCase from '../../../domain/usecases/auth/login.user.usecase'
import readUserMailUseCase from '../../../domain/usecases/users/read.user.mail.usecase'
import readUsernameUseCase from '../../../domain/usecases/users/read.user.name.usecase'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import secret from '../../../infrastructure/config/secret.config';

class UserMiddleware {
    validateRegister = validate({
        body: Joi.object({
            username: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        })
    })

    validateLoginbody = validate({
        body: Joi.object({
            username: Joi.string().required(),
            password: Joi.string().required()
        })
    })

    async validateUserMailRepeated (req: express.Request, res: express.Response, next: express.NextFunction){
        let resourceEmail: string = req.body.email
        const mail = await readUserMailUseCase.execute(
            {email: resourceEmail}
        )
        console.log(mail)
        if (mail === null) {
            next()
        } else { 
            res.status(409).send({error:"Esse email e/ou usuario já existe"})
        }

    }

    async validateUserNameRepeated (req: express.Request, res: express.Response, next: express.NextFunction){
        let resourceUsername: string = req.body.username
        const user = await readUsernameUseCase.execute(
            {username: resourceUsername}
        )
        console.log(user)
        if (user === null) {
            next()
        } else { 
            res.status(409).send({error:"Esse email e/ou usuario já existe"})
        }

    }
    
    async validateUserNameExists (req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
        let resourceUsername = req.body.username
        const user = await readUsernameUseCase.execute({
            username: resourceUsername
        })

        if(user) {
            console.log(user);         
            next()
        }
        if(!user) {
            res.status(404).send("Usuário não encontrado")
        }

        } catch (error) {
            console.log(error)
        }
   
    }

    async validatePassword (req: express.Request, res: express.Response, next: express.NextFunction) {
        const user = await loginUseCase.execute(req.body)
        let isMatch =  bcrypt.compareSync(req.body.password, user.password)

         if(isMatch) {
                next()
            } else {
                res.status(401).send("Senha Invalida")
            }

    }
    
    async auth (req: express.Request, res: express.Response, next: express.NextFunction) {
            const auth  = req.headers.authorization
            if(!auth) {
                return res.status(401).send("Não autorizado")
            }
            console.log(auth)
            const parts = auth.split(" ")
            const [schema, token] = parts

            jwt.verify(token, secret, (error, decoded) => {
                if (error || !decoded) {
                    return res.status(401).send({ message: 'Token inválido.' });
                  }
                  if(typeof decoded === 'string') {
                     return res.status(401).send({ message: 'Token inválido.' });
    
                  }
                  console.log(decoded)
                  const userid = decoded.userid
                  if(!userid) {
                    return res.status(401).send({ message: 'Token inválido.' });
                 }
                  
                  req.username = decoded.username
                  req.userid = decoded.userid;
                  return next();

            })
    }
    

    }
  


    


export default new UserMiddleware()