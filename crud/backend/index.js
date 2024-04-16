        //command: sudo service mongod start
    
    const express=require("express")
    const mongoose =require("mongoose")
    const cors=require("cors")
    const companyModel= require('./models/company')
    const bcrypt=require('bcrypt')

    const app= express()
    app.use(express.json())
    app.use(cors())

    mongoose.connect("mongodb://0.0.0.0:27017/company")

    app.post('/login', (req, res) => { 
        const { email, password } = req.body; 
        companyModel.findOne({ email })
            .then(user => {
                if (user) {
                    bcrypt.compare(password, user.password,(err,response)=>{
                        if (response){
                            res.json("Login successful! Redirecting to home page.")
                        } else {
                            res.json("the password is incorrect !! ");
                        }
                    })
                } else {
                    res.json("No record existed, verify your credentials !");
                }
            })
            .catch(err => {
                console.error("Error:", err);
                res.status(500).json("Internal Server Error");
            });
    });
    
    app.post('/register',(req,res)=>{ 
        const {firstname,lastname, email,password}= req.body;
        bcrypt.hash(password,15)
        .then(hash=>{
            companyModel.create({firstname,lastname, email,password: hash})
            .then(companies=>res.json(companies))
            .catch(err=>res.json(err))
        })
    })

    app.listen(3002, ()=>{
        console.log("server is running")
    })
