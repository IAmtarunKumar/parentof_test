const express = require("express")

require("dotenv").config()

const {connection} =require("./config/db")
const  {userRouter} = require("./router/userRouter")

const app = express()

app.use(express.json())

app.get("/" , (req,res)=>{
    res.send("working")
})

app.use("/student" , userRouter)

app.listen(process.env.port, async()=>{
    try {
        await connection
        console.log("mongoDB is connected")
    } catch (error) {

        console.log(error)
        
    }
    console.log(`server is running on port ${process.env.port}`)
})