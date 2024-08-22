import express from 'express'
import dotenv from 'dotenv'
import connectDB from './src/DB Config/index.js'
dotenv.config()

const app = express()

connectDB()

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
// app.use(cookieParser())

// Routes Imports 
// import router from './src/Routes/TextEhancer.routes.js'
import TextEnhancerRouter from './src/Routes/TextEhancer.routes.js'
import EssayWritterRouter from './src/Routes/EssayWritter.routes.js'
import EmailWritterRouter from './src/Routes/EmailWritter.routes.js'



// routes declaration 
app.use("/api/v1/postTextenhancer",TextEnhancerRouter)
app.use("/api/v1/postEssayWritter",EssayWritterRouter)
app.use("/api/v1/postEmailWritter" ,EmailWritterRouter)

app.listen(3001 , ()=>{
    console.log("Server Running ")
})

