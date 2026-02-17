const mongoose=require('mongoose')

const itemSchema=new mongoose.Schema({
    name:String,
    email: String,
    bloodgroup: String,
    address:String,
    contact:String,
    pincode:String,
    password:String,
});

module.exports=mongoose.model("signUpUser",itemSchema);