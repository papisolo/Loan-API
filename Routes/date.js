
const sevenDays = () => {
    // set the date we are counting down to
    var countDownDate = new Date()

    // Update the count down every one second
    var x = setInterval(function(){
        var now = new Date().getTime()

        //find the distance between now and the count down date
        var distance = countDownDate - now

        //Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance/ (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if(distance < 0) { 
clearInterval(x)
        }
    }, 1000)
 };



const oneWeek = function(){
    var countDownDate = new Date("jan 5, 2024 15:37:25").getDay()
    var now = new Date().getDate();
 var dateIncrement = new Date().getDate() + 7;
 var difference =  countDownDate - now
 if(dateIncrement == now){
    console.log("Payment must first be made")
    
 }


 else if (dateIncrement == 32){
    
    if (now == 2){
        return new Date().getDate();
    }
   else  { return "Payment must first be made"
};

   

 }

 else if (dateIncrement == 33){  
    if (now == 3){
        return new Date().getDate();
    }
   else return "Payment must first be made";
 }


 else if (dateIncrement == 34){
    if (now == 4){
        return new Date().getDate();
    }
   else return "Payment must first be made";
 }


 else if (dateIncrement == 35){
    if (now == 5){
        return new Date().getDate();
    }
   else return "Payment must first be made";
 }


 else if (dateIncrement == 36){
    if (now == 6){
        return new Date().getDate();
    }
   else return "Payment must first be made";
 }



 else if (dateIncrement == 37){
    if (now == 7){
        return new Date().getDate();
    }
   else return "Payment must first be made";
 }


else {return "You can't use this page"}

}
 

const twoWeeks = function(){
    
}