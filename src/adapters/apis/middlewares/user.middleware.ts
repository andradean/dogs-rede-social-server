import express from 'express'
import { validate, Joi, ValidationError } from 'express-validation'

class UserMiddleware {
    validateRegister = validate({
        body: Joi.object({
            username: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        })
    })
}



export default new UserMiddleware()