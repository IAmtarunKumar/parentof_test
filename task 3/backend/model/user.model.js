const mongoose = require("mongoose")

//schema

const userSchema = mongoose.Schema({
    "name" : {type : String , required : true},
    "class" : {type : String , required : true},
    "marks" : {type : String , required : true}
})


//model

const UserModel = mongoose.model("user" , userSchema)

module.exports={UserModel}