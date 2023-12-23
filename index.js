import express, { application } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({limig: "50mb"}))
app.get('/', (req, res) => {
    res.status(200).json({message: "Hello from Job"})
})
app.listen(5000, ()=> {
    console.log(`listen on port 5000`)
})