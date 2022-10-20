const routes = require("express").Router();
const Users = require("../models/postSchema");
const axios = require("axios");
const {nanoid} = require("nanoid");
const{randomBytes} = require('crypto');
const dotenv = require("dotenv")
dotenv.config()


routes.get("/", async (req,res) => { 
   
  
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


 
 


  

})

//This endpoint verifies if payment fails or is successful
routes.get('/payment-callback', async (req, res) => {
  if (req.query.status === 'successful') {
      const transactionDetails = await Transaction.find({ref: req.query.tx_ref});
      const response = await flw.Transaction.verify({id: req.query.transaction_id});
      if (
          response.data.status === "successful"
          && response.data.amount === transactionDetails.amount
          && response.data.currency === "NGN") {
          // Success! Confirm the customer's payment
          res.status(200).send("payment successful")
      } else {
          // Inform the customer their payment was unsuccessful
      }
  }
}
);




routes.post("/",  async (req,res) => { 
  const user = new Users({firstName : req.body.firstName, 
    lastName : req.body.lastName,
    Email: req.body.Email,
    BVN : req.body.BVN,
    Date : req.body.Date,
   PhoneNumber : req.body.PhoneNumber,
   Address: req.body.Address
 })
 try{

const store = await user.save()

 } catch(err){
    res.json({message : err})
             }
 console.log(req.body)
})


routes.delete("/delete/:id", async (req,res) => { 
    res.send("Post Route")
 try{const deletedUsers = await  Users.remove(req.params.id)
    } catch(err){
                   res.json({mssg:err})
                }
    
})


//FOR PAYSTACK
routes.post("/post", (req, res) =>  {
  const method = req.method
  const url = "https://api.paystack.co/transaction/initialize"

  let headers = {
    authorization: process.env.Secret_key,
    'content-type': 'application/json'
  }

  if(method === 'POST' || method === 'PUT') {
    return axios({
      method,
      url,
      data: req.body,
      headers
    }).then(function (response) {
      return res.json(response.data.data)
    }).catch(function (error){
      return res.status(error.response.status).json(error.response.data)
    }); 
  } else {
    return axios({
      method,
      url,
      headers
    }).then(function (response) {
      return res.json(response.data)
    }).catch(function (error){
      return res.status(error.response.status).json(error.response.data)
    });
  }
})


//FOR FLUTTERWAVE
routes.post("/flutterwave" , async (req, res) => {
  const method = req.method
  const url = "https://api.flutterwave.com/v3/payments"

  let headers = {
    authorization: process.env.SECRET_KEY,
    'content-type': 'application/json'
  }

  if(method === 'POST' || method === 'GET') {
    return axios({
      method,
      url,
      data:{
        tx_ref: nanoid(),
        amount: req.body.amount,
        currency: "NGN",
        redirect_url: "https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc",
        meta: {

          
            consumer_id: req.body.id,
            consumer_mac: "92a3-912ba-1192a"
        },
        customer: {
            email: req.body.email,
            phonenumber: req.body.PhoneNumber,
            name: req.body.name
        },
        customizations: {
            title: req.body.title,
            logo: "http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png"
        }
    },
      headers
    }).then(function (response) {
      return res.json(response.data.data.link)
    }).catch(function (error){
      if(error){}
      //return res.status(error.response.status).json(error.response.data)
    }); 
  } else {
    return axios({
      method,
      url,
      headers
    }).then(function (response) {
      return res.json(response.data.data.link)
    }).catch(function (error){
      return res.status(error.response.status).json(error.response.data)
    });
  }



})


routes.patch("/update", (req,res) => {
    res.send("Post Route")
})


/*const https = require('https')
const params = JSON.stringify({
  "email": "customer@email.com",
  "amount": "20000"
})
const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/initialize',
  method: 'POST',
  headers: {
    Authorization: 'Bearer SECRET_KEY',
    'Content-Type': 'application/json'
  }
}
//This can be inside our callback url
const req = https.request(options, res => {
  let data = ''
  res.on('data', (chunk) => {
    data += chunk
  });
  res.on('end', () => {
    console.log(JSON.parse(data))
  })
}).on('error', error => {
  console.error(error)
})
req.write(params)
req.end()*/


//const { port, hostname, secretKey } = require('./config')





//app.get('/', (_, res) => res.status(200).send('Health check OK'))

/*app.get('/callback', (_, res) => {
  res.status(200).send(`<div>Payment successful!</div>`)
})*/

//app.use(process_request)

module.exports = routes