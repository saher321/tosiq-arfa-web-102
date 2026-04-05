// pkgs: epxress, dotenv, nodemon, mongoose, nanoid, nodemailer, jwt
// JASON web token: 534t3f34f43f43f.4f34rr23r3a32r.f23223

import express from 'express'
import dotenv from 'dotenv'
import noteRoute from './modules/note/note.route.js'
import { connectDB } from './config/db.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT
const PREFIX = '/api/v1'
app.use( PREFIX, noteRoute)

app.get('/', (req, res)=>{
    return res.send({status: true, message: "Server is started"})
})

connectDB().then(() => {
    app.listen( PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`)
    })
}) 