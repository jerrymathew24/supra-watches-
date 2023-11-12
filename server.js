import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"
import authRoute from "./routes/authRoute.js"
import categoryRoute from './routes/categoryRoute.js'
import productRoute from './routes/productRoute.js'
import cors from "cors"
import path from "path"
import { fileURLToPath } from 'url'

//configure env
dotenv.config()

//database config
connectDB();

//es module fix
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, './frontend/build')))

//routes
app.use("/api/v1/auth", authRoute)
app.use('/api/v1/category', categoryRoute)
app.use('/api/v1/product', productRoute)


//rest api
app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, './frontend/build/index.html'))
})

//port
const PORT = process.env.PORT || 8080


//server init
app.listen(PORT, () => {
    console.log(`SERVER SPINNING 0N P0RT ${PORT}`.bgGreen)
})