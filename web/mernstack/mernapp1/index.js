import express from 'express'

const app = express();
const PORT = 5000 // 5000, 8000, 8080, 8001
app.get('/', (req, res) => {
    return res.send({status: true, message: "Server is running"})
})

app.listen( PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})