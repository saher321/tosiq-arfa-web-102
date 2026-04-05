// pkgs: epxress, dotenv, nodemon, mongoose, nanoid, nodemailer, jwt
// JASON web token: 534t3f34f43f43f.4f34rr23r3a32r.f23223

import express from 'express'
import dotenv from 'dotenv'
import deptRoute from './modules/department/department.route.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use('', deptRoute)

app.get('/', (req, res)=>{
    return res.send({status: true, message: "Server is started"})
})

app.listen( PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})