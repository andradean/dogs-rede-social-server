import express from 'express'
import { validate, Joi, ValidationError } from 'express-validation'
import readUserRepeatedUsecase from '../../../domain/usecases/users/read.user.repeated.usecase'

class UserMiddleware {
    validateRegister = validate({
        body: Joi.object({
            username: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        })
    })

    async validateUserMailRepeated (req: express.Request, res: express.Response, next: express.NextFunction){
        let resourceEmail = req.body.email
        const user = await readUserRepeatedUsecase.execute({
            email: resourceEmail,
            username: ''
        })
        console.log(user)
        if (user === null) {
            next()
        } else { 
            res.status(409).send({error:"Esse email e/ou usuario já existe"})
        }

    }
}


export default new UserMiddleware()