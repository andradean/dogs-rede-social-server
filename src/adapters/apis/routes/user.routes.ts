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
                userController.createUser
            )
       
        return this.app
    }
    
    
}