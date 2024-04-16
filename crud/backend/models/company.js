const mongoose =require('mongoose')

const companySchema=new mongoose.Schema({
    firstname: String,
    lastname: String, 
    email: String, 
    password: String
})

const companyModel= mongoose.model("companies", companySchema)
module.exports= companyModel