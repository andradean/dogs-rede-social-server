import express from 'express'
import { validate, Joi, ValidationError } from 'express-validation'
import loginUseCase from '../../../domain/usecases/users/login.user.usecase'
import readUserRepeatedUsecase from '../../../domain/usecases/users/read.userMail.usecase'
import readUsernameUsecase from '../../../domain/usecases/users/read.username.usecase'
import bcrypt from 'bcrypt'

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
        const user = await readUserRepeatedUsecase.execute(
            {email: resourceEmail}
        )
        console.log(user)
        if (user === null) {
            next()
        } else { 
            res.status(409).send({error:"Esse email e/ou usuario já existe"})
        }

    }

    async validateUserNameRepeated (req: express.Request, res: express.Response, next: express.NextFunction){
        let resourceUsername: string = req.body.username
        const user = await readUsernameUsecase.execute(
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
        const user = await readUsernameUsecase.execute({
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
}

    


export default new UserMiddleware()