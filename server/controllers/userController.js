const User = require("../models/postSchema")
const { Pool } = require('pg')
const services = require("../Services")
const db = require('../models/sqlitedb')
const v = require('express-validator')
const { Validator } = require('node-input-validator')
const knex = require('knex')({
      client: 'sqlite3',
      connection: {
            filename: "./expensedb.sqlite"
      }
})
const mongoose = require('mongoose')
const { registerValidation } = require('../validation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



exports.GetUsers = async (req, res, next) => {

      var sql = "select * from sales"  //I now have two database expense and sales
      var params = []
      db.all(sql, params, (err, rows) => {
            if (err) {
                  res.status(400).json({ "error": err.message });
                  return;
            }
            res.send(rows)
            services()
      })




      //const users = await User.find();    // Using await here, the page didnt load

      // res.render('index', {users})




      //res.send("Welcome") //sending two response says cannot set headers after the are sent to the client


      //const uid = Math.random().toString(36).slice(2)+ randomBytes(8).toString('hex')+ new Date().getTime()
      //console.log(uid)

      //This will generate unique reference
      //console.log(nanoid())




      //var now = new Date().getDate();
      //var dateIncrement = new Date("oct 25, 2022 15:37:25").getDate() + 7;
      //if(dateIncrement > 32){
      // var date = new Date().getDate();
      // if (date == 2){
      //     console.log(new Date().getDate());
      // }
      //else console.log("Payment must first be made")
      //}
}


exports.GetUsersById = async (req, res, next) => {


      var sql = "select * from sales where amount = ?"
      var params = [req.params.item]



      db.get(sql, params, (err, row) => {
            if (row) {
                  res.json(row)
                  return;
            }

            console.log(row)

      })

}

exports.PostUsers = async (req, res, next) => {

      //Here we are validating    

      /*
      const v = new Validator(req.body, {
           item : 'required|string|minLength:10|maxLength:11',
           amount : 'required|integer',
           category : 'required|string|minLength:10',
           location: 'required|string',
           spendOn : 'required|email',
           createdOn : 'required|email',
           modifyOn : 'required|email',
     
      });
      v.check().then((matched)=>{
           if(!matched &&  v.errors ){
                
             return   res.status(400).send( v.errors)
           }
     
           
          
         
      })*/

      const { error } = registerValidation(req.body)

      if (error) return res.status(400).send(error.details[0].message)

      const emailExist = await User.findOne({ Email: req.body.Email }) //When the email was small letter e it didnt work
      if (emailExist) return res.status(400).send('Email already exists')

      //HASH PASSWORDS
      //const salt = await bcrypt.genSalt(10);
      //const hashPassword = await bcrypt.hash(req.password, salt)

      const user = new User({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            PhoneNumber: req.body.PhoneNumber,
            Address: req.body.Address,
            Date: req.body.Date
      })


      try {

            const savedUser = await user.save()
            res.send({ User: savedUser._id })

      } catch (err) {

            res.status(404).send(err)
      }





}



exports.UpdateUsers = async (req, res, next) => {

      User.updateOne()

}

exports.LoginUsers = async (req, res, next) => {


      const { error } = loginValidation(req.body)

      if (error) return res.status(400).send(error.details[0].message)

      //CHECKING IF USER EXIST
      const emailExist = await User.findOne({ Email: req.body.Email }) //When the email was small letter e it didnt work
      if (!emailExist) return res.status(400).send('Email or password is wrong')

      //CHECK IF PASSWORD IS CORRECT
      //const validPass = await bcrypt.compare(req.body.password, user.password)
      //if(!validPass) return res.status(400).send("Invalid Password")

      const token = jwt.sign({ _id: User._id }, process.env.TOKEN_SECRET)
      res.header('auth-token', token).send(token)
      res.send('Logged in!');

}
