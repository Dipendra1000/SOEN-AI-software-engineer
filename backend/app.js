import express from "express"
import morgan from 'morgan'
import connect from './db/db.js'
import userRoutes from './routes/user.route.js'
import projectRoutes from './routes/project.route.js'
import cookieParser from "cookie-parser"
import cors from 'cors'
connect()

const app = express()

app.use(cors("http://localhost:5173"))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use("/users", userRoutes)
app.use("/projects", projectRoutes)

app.get("/", (req, res)=>{
    res.send("hello world!")
})

export default app