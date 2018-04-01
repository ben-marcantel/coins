let  input = document.getElementById("input");
let  button = document.getElementById("button");
let  output = document.getElementById("output");
let coinPurse = {};



button.addEventListener("click", coinCounter);




 
 function coinCounter () {
    let inputFix = input.value *100;
     coinPurse.quarters = inputFix/25;
     coinPurse.dimes = (inputFix%25)/10;
     coinPurse.nickels = ((inputFix%25)%10)/5;
     coinPurse.pennies =(((inputFix%25)%10)%5)/1; 
     output.innerHTML= Object.values(coinPurse)
    console.log(coinPurse);
  }
  


  







