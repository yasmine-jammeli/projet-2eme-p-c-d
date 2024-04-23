const mongoose = require('mongoose');

    const employeeSchema = new mongoose.Schema({
        CIN: Number,
        firstName: String,
        lastName: String, 
        email: String, 
        role: String,
        phonenumber: Number,
        password: String,
    }, { timestamps: true });

const Employee= mongoose.model('Employee', employeeSchema);

module.exports = Employee;
