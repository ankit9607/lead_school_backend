import { Router } from 'express';
import * as AuthController from '../controllers/auth.controller';


export const AuthRouter = Router();

AuthRouter.get('/singup', AuthController.signup);
AuthRouter.get('/login', AuthController.login);