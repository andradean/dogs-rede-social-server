import express from 'express'
import { validate, Joi, ValidationError } from 'express-validation'
import readUserRepeatedUsecase from '../../../domain/usecases/users/read.userMail.usecase'
import readUsernameUsecase from '../../../domain/usecases/users/read.username.usecase'

class UserMiddleware {
    validateRegister = validate({
        body: Joi.object({
            username: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
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
}


export default new UserMiddleware()