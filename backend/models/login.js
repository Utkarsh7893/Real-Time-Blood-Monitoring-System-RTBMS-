const mongoose=require('mongoose')

const itemSchema=new mongoose.Schema({
    email: String,

});

module.exports=mongoose.model("forgotUser",itemSchema);