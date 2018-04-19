let  input = document.getElementById("input");
let  button = document.getElementById("button");
let  output = document.getElementById("output");
let coinPurse = {};



button.addEventListener("click", coinCounter);




 
 function coinCounter () {
    let inputFix = input.value *100;
     coinPurse.quarters = Math.floor(inputFix/25);
     coinPurse.dimes = Math.floor((inputFix%25)/10);
     coinPurse.nickels = Math.floor(((inputFix%25)%10)/5);
     coinPurse.pennies = Math.floor((((inputFix%25)%10)%5)/1); 
     output.innerHTML= `Quarters: ${coinPurse.quarters},
     Dimes: ${coinPurse.dimes},
     Nickels: ${coinPurse.nickels},
     Pennies: ${coinPurse.pennies}`;
    console.log(coinPurse);
  }
  


  







