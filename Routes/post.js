const routes = require("express").Router();
const Users = require("../models/postSchema")



routes.post("/", (req,res) => { 
    console.log(req.body)
})



module.exports = routes