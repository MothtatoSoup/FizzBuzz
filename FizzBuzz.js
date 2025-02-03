// Define Constants for the form and the result display area

const userInput = document.getElementById("Input");
const userResults = document.getElementById("result");
console.log("Defined Variables")
let output;
// Add the first line of the event listener to handle form submission
document.getElementById("Button").addEventListener("onClick", function (x) {
     Event.preventDefault();  // Prevent the form from refershing the page
     console.log("Event works")
     // Get the number from the form input
     x = userInput.value();
     console.log("Defined let vars")
     //FizzBuzz code
     if(x % 3 == 0 && x % 5 == 0){
           console.log("FizzBuzz");
           output = "FizzBuzz";
     } else if(x % 3 == 0){
           console.log("Fizz");
           output = "Fizz";
     } else if(x % 5 == 0){
           console.log("Buzz");
           output = "Buzz";
     } else{
           console.log(x);
           output = "x";
      }
          
})
console.log("End of loop")
userResults.textContent = output;