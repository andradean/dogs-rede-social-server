import express from 'express'
import { validate, Joi, ValidationError } from 'express-validation'

class commentMiddleware {
    validateComment = validate({
        body: Joi.object({
            content: Joi.string().max(200).required(),
        })
    })
}

export default new commentMiddleware()