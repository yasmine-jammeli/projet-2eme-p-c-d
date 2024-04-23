const mongoose =require('mongoose')

const companySchema=new mongoose.Schema({
    AdminName: String,
    CompanyName: String, 
    Email: String, 
    Password: String,
    Address: String,
    PhoneNumber: Number,
})

const companyModel= mongoose.model("companies", companySchema)
module.exports= companyModel