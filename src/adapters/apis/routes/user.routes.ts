import { CommonRoutesConfig } from "./common.routes.config";
import  express  from "express";
import userController from '../controllers/user.controller'
import photoController from "../controllers/photo.controller";
import userMiddleware from "../middlewares/user.middleware";
import photoMiddleware from "../middlewares/photo.middleware";

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

        this.app.route('/jwt-auth/v1/token/validate')
        .post(
            userController.autoLogin
        )
        this.app.route('/api/user')
        .get(
            userMiddleware.auth,
            userController.getUserById
        )
        this.app.route('/api/photo')
         .post(
           userMiddleware.auth,
           photoMiddleware.uploadFile().single('img'),
           photoController.postPhoto
         )
        return this.app
    }
    
    
}