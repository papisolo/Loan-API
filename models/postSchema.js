const mongoose = require("mongoose")


const PostSchema = mongoose.Schema({firstName : {type : String, required: true},
    lastName : {type : String, required: true},
    Email : {type : String, required: true},
    BVN : {type : String, required: true},
    Date : {type : Date, required: true, default: Date.now},
    phoneNumber : {type : String, required: true},
    Address : {type : String, required: true}})


    module.exports = mongoose.model("userProfile", PostSchema);