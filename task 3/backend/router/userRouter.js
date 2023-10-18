const express = require("express")
const { UserModel } = require("../model/user.model")

const userRouter = express.Router()


//insert data
userRouter.post("/" , async(req,res)=>{
    const payload = req.body
    
    console.log("req.body data" , req.body)
    try {

    if(!payload.name || !payload.class || !payload.marks){
        return res.status(400).send("Something went wrong")
    }

        let user = await UserModel(payload)
        await user.save()
       return res.status(201).send("Student profile created successfully")
    } catch (error) {
       return res.status(500).send(`Internal server error ${error.message}`)  
    }
})

// get all students
userRouter.get("/" , async(req,res)=>{
   
   
    try {
       let allStudent = await UserModel.find()
       if(!allStudent){
        return res.status(400).send("student not found")
       }
        res.status(200).send(allStudent)
    } catch (error) {
      return res.status(500).send(`Internal server error ${error.message}`)  
    }
})




// get all students
userRouter.patch("/:id" , async(req,res)=>{
   
    const id = req.params.id
    const payload = req.body
   
    try {
      let student = await UserModel.findByIdAndUpdate({"_id" : id} , payload)
       return res.status(200).send(`${id} id student profile updated`)
    } catch (error) {
      return  res.status(500).send(`Internal server error ${error.message}`)  
    }
})


module.exports={userRouter}