const mongoose = require("mongoose")



const LoginSchema = new mongoose.Schema({Password : {type :Password, required : true},
    Email : {type : String, required: true},
    })