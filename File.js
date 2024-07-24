const Routes = require("express").Router()
const fs = require('fs')
const path = require('path')





//USING CALLBACK FOR ASYNCHRONOUS OPERATION
 /*function getData(cb){
    

        setTimeout(() => {

            const data = "Some Data"
            cb(data)

            //return wont work here
        }, 3000)
  

}

getData((data) => {

    console.log(data)
})
   

//USING ASYNC AWAIT FOR ASYNCHRONOUS OPERATION
async function getData(){
    
return new Promise((resolve, reject) => {

    setTimeout(() => {

        const data = "Some Data"
        resolve(data)

        //return wont work here
    }, 3000)
})
    


}

 async function Main(){

    const res =  await getData()
    console.log(res)
}
 
Main()*/
 
//USING PROMISE FOR ASYNCHRONOUS OPERATION
/*function getData(){
    
    return new Promise((resolve, reject) => {
    
        setTimeout(() => {
    
            const data = "Some Data"
            resolve(data)
    
            //return wont work here
        }, 3000)
    })
    
    
    }


 getData().then((data) => {
    console.log(data)
 }).catch((err) => {})

   */
 function TrySomething(){

    setTimeout(() => {
    
        console.log("Some Data")
    
        //return wont work here
    }, 3000)

    return "Trying Something Different"
 }

console.log(TrySomething())


function getData(cb){
    

   cb();

        


}

getData(() => {
    const data = "Testing Callback"
    console.log(data)

})

module.exports = Routes 