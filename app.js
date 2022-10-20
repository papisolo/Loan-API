const express = require("express");
const app = express();
const mongoose = require("mongoose");
const homeRoute = require("./Routes");
const postRoute = require("./Routes/post");
const bodyParser = require("body-parser");
const  cors = require("cors")




//app.get("/", (req, res) => {res.send("Welcome to home page")})

//app.use(()=> {console.log("On home page")})


//This must come before the routes
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(cors());



app.use("/api", homeRoute );
app.use("/api/post", postRoute );
//app.use(express.json());



mongoose.connect(process.env.URL, () => console.log("connected to database"))
 
var port = 8000
app.listen(8000, (err) => {if (err){console.log(err)};
console.log(`server running on port ${port}`);});

module.exports = app