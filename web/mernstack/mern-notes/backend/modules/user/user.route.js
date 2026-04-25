import express from 'express'
import { forgotPassword, login, register } from './user.controller.js';

const userRouter = express.Router();

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.post('/forgot-password', forgotPassword)

export default userRouter;