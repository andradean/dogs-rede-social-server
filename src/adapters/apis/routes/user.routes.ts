import { CommonRoutesConfig } from "./common.routes.config";
import  express  from "express";
import userController from '../controllers/user.controller'
import userMiddleware from "../middlewares/user.middleware";

export class UserRoutes extends CommonRoutesConfig {
    constructor ( app: express.Application) {
        super(app, 'userRoutes' )
    }
    
    configureRoutes(): express.Application {
        this.app.route('/api/user')
            .post( 
                userMiddleware.validateRegister,
                userMiddleware.validateUserNameRepeated,
                userMiddleware.validateUserMailRepeated,
                userController.createUser
            )
          this.app.route('/jwt-auth/v1/token')
          .post(
            userMiddleware.validateLoginbody,
            userMiddleware.validateUserNameExists,
            userMiddleware.validatePassword,
            userController.login
          )
        return this.app
    }
    
    
}