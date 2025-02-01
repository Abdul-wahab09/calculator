const display = document.getElementById("display"); 

let appendToDisplay = (input) => display.value += input; 

let ClearDisplay = () => display.value = "";

 function calculate(){ 
    try{ 
        display.value = eval(display.value)

     } catch(error){
         display.value = "Error he jani"
         }
 }