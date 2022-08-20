// Assignment code here

//Arrays to choose from
  var numbers = ["1","2","3","4","5","6","7","8","9"].join("");
  var symbols = ["!","@","#","$","%","^","&","*",")"].join("");
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"].join("");
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].join("");

  var possibleCharacters = [];
  var userChoiceLength = [];

  function writePassword() {            
      password = generatePassword(); 
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password
  };  
 
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  possibleCharacters=[];
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
    
    //When user clicks the button to generate password then presented with a series of prompts for
    // Window Prompts
    function generatePassword() {

      var userChoiceLength = window.prompt("Select length between 8 and 128");
      console.log("password length " + userChoiceLength);

      // If no number is entered, prompt user to enter a number  
      if(userChoiceLength < 8 || userChoiceLength > 128) {
          (window.alert("Please select between 8 and 128"));
          return; 
        } 

        // User choice of input
      confirmNumbers = confirm("Would you like to use numbers?") 
        if (confirmNumbers === true) {
          possibleCharacters.push(numbers)
        } 
      confirmSymbols = confirm("Would you like to use symbols?") 
        if (confirmSymbols === true) {
          possibleCharacters.push(symbols)
        }
      confirmUppercase = confirm("Would you like to use uppercase?") 
      if (confirmUppercase === true) {
        possibleCharacters.push(uppercase)
      }
      confirmLowercase = confirm("Would you like to use lowercase?") 
      if (confirmLowercase === true) {
        possibleCharacters.push(lowercase)
      }
    // Accessing the criteria to generate the password
      if(!confirmNumbers && !confirmSymbols && !confirmLowercase && !confirmUppercase) {
      window.alert("Please choose a criteria");

      } else {
        const random = (length = userChoiceLength) => {
          let chars = possibleCharacters.join("");//use join("") instead of join() to eliminate commas from returned array

          let str = "";

          for (let i = 0; i < length; i ++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
          };
          return str;
        };
        console.log(random());
        return random();//return random must include() to function
      };
     };
  writePassword