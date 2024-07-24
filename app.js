const express = require("express");
const app = express();
const mongoose = require("mongoose");
const homeRoute = require("./server/Routes/index");
const postRoute = require("./server/Routes/post");
const pathRoute = require("./server/Routes/path");
const fileRoute = require("./server/Routes/FileSystem");
const bodyParser = require("body-parser");
const  cors = require("cors")
const {engine} = require("express-handlebars");
const axios = require("axios");
require('dotenv').config();
const helmet = require('helmet');
const path = require("node:path");
const process = require('process');
const resumeRoute = require('./server/Routes/Resume');






//app.get("/", (req, res) => {res.send("Welcome to home page")})

//app.use(()=> {console.log("On home page")})


//This must come before the routes
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(cors());
//for https security
app.use(helmet());

app.get("/", (req, res) => {

  res.send("Welcome")

  
})


app.use("/api", homeRoute );
app.use("/api/post", postRoute );
app.use("/api/path", pathRoute );
app.use("/api/File", fileRoute );
app.use("/api/Resume", resumeRoute );
app.use(express.static("public")) //Error root path required was solved by adding public 
app.use(express.json());


app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use((error , req, res, next) =>
         { console.log(error);
         const status = error.status
         res.send(error)
           next(error)
         })

function myName(){
  console.log("solomon")
}


myName();
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser : true},
(err) => {  if(err) {console.log(err)}
  else {console.log('Connected to database')}
})

var port = 8080
app.listen(8080, (err) => {if (err){console.log(err)};
console.log(`server running on port ${port}`);});



module.exports = app