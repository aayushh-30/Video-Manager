import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv"
//require('dotenv').config()

dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("Mongo DB Connection Failed !!!",error)
})




















// import express from "express"
// const app = express()
// ;( async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Error",error)
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`Server is listening on ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR : ",error)
//     }

// })()