const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const companyModel = require('./models/companies');
const employeeModel = require('./models/employees');
const bcrypt = require('bcrypt');
const saltRounds = 10; // Number of salt rounds for hashing


const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());

mongoose.connect("mongodb://0.0.0.0:27017/database", { useNewUrlParser: true, useUnifiedTopology: true });

// Login Route
app.post('/login', (req, res) => { 
    const { Email, Password } = req.body; 
    companyModel.findOne({ Email })
        .then(user => {
            if (user) {
                bcrypt.compare(Password, user.Password,(err,response)=>{
                    if (response){
                        res.json("Login successful! Redirecting to home page.")
                    } else {
                        res.json("The password is incorrect!");
                    }
                })
            } else {
                res.json("No record found for the provided email.");
            }
        })
        .catch(err => {
            console.error("Error:", err);
            res.status(500).json("Internal Server Error");
        });
});

// Register Route
app.post('/register',(req,res)=>{ 
    const { AdminName, CompanyName, Email, Password } = req.body;
    bcrypt.hash(Password, 15)
    .then(hash=>{
        companyModel.create({ AdminName, CompanyName, Email, Password: hash })
        .then(companies => res.json(companies))
        .catch(err => res.json(err));
    })
    .catch(err => {
        console.error("Error:", err);
        res.status(500).json("Internal Server Error");
    });
});

// Import Route

app.post('/import', async (req, res) => {
    try {
        const employees = req.body.employees;

        if (!employees || employees.length === 0) {
            return res.status(400).json({ success: false, message: "No employees data provided" });
        }

        console.log("Received employees data:", employees);

        const promises = employees.map(async(item) => {
            try {
                const existingEmployee = await employeeModel.findOne({ CIN: item.CIN });
                if (existingEmployee) {
                    // Update existing employee
                    const hashedPassword = await bcrypt.hash(item.password, saltRounds);
                    await employeeModel.findByIdAndUpdate(existingEmployee._id, {
                        $set: {
                            CIN: item.CIN,
                            email: item.email,
                            role: item.role,
                            phonenumber: item.phonenumber,
                            password: hashedPassword, // Use hashed password
                            createdAt: item.createdAt,
                            updatedAt: item.updatedAt,
                            __v: item.__v,
                            firstName: item.firstName,
                            lastName: item.lastName
                        }
                    });
                    console.log("Updated employee:", item);
                } else {
                    // Create new employee
                    const hashedPassword = await bcrypt.hash(item.password, saltRounds);
                    await employeeModel.create({
                        ...item,
                        password: hashedPassword // Use hashed password
                    });
                    console.log("Created new employee:", item);
                }
            } catch (error) {
                console.error("Error processing employee:", error);
            }
        });

        await Promise.all(promises);

        res.status(200).json({ success: true, message: "Employees imported/updated successfully" });
    } catch (err) {
        console.error("Error importing employees:", err);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

// Create employee
app.post('/employees', async (req, res) => {
    try {
        const { CIN, firstName, lastName, email, role, phonenumber, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const employee = await employeeModel.create({
            CIN,
            firstName,
            lastName,
            email,
            role,
            phonenumber,
            password: hashedPassword
        });
        res.status(201).json(employee);
    } catch (error) {
        console.error("Error creating employee:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

// Read all employees
app.get('/employees', async (req, res) => {
    try {
        const employees = await employeeModel.find();
        res.status(200).json(employees);
    } catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

// Update employee
app.put('/employees/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { CIN, firstName, lastName, email, role, phonenumber, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        await employeeModel.findByIdAndUpdate(id, {
            CIN,
            firstName,
            lastName,
            email,
            role,
            phonenumber,
            password: hashedPassword
        });
        res.status(200).json({ success: true, message: "Employee updated successfully" });
    } catch (error) {
        console.error("Error updating employee:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

// Delete employee
app.delete('/employees/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await employeeModel.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Employee deleted successfully" });
    } catch (error) {
        console.error("Error deleting employee:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});


const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
