// Assignment code here

//Arrays to choose from
  var numbers = ["1","2","3","4","5","6","7","8","9"];
  var symbols = ["1","2","3","4","5","6","7","8","9"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var userChoiceLength = [];
  // Turn numbers into a sting
  //var stringNumbers = numbers.tostring();
  var randomIndex = numbers.concat(symbols, lowercase, uppercase);

    console.log(randomIndex);

    function writePassword() {            
      password = generatePassword(); 
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password
            }  
 
   
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  
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
          var computerChoice = numbers.index;

        
        console.log("Numbers have been selected " + numbers);
        } else {
          console.log("Numbers will not be used");
        }
        

      confirmSymbols = confirm("Would you like to use symbols?") 
        if (confirmSymbols === true) {
          var computerChoice = symbols.index;
      
      console.log("Symbols have been selected " + symbols);
        } else {
          console.log("Symbols will not be used");
        }


      confirmUppercase = confirm("Would you like to use uppercase?") 
      if (confirmUppercase === true) {
        var computerChoice = uppercase.index;
      
      console.log("Uppercase have been selected " + uppercase);
      } else {
        console.log("Uppercase will not be used");
      }

      confirmLowercase = confirm("Would you like to use lowercase?") 
      if (confirmLowercase === true) {
        var computerChoice = lowercase.index;
      
      console.log("Lowercase have been selected " + lowercase);
    } else {
      console.log("Lowercase will not be used");
    }

    // Accessing the criteria to generate the password
    
    // User input is validated and at least one character is selected
    if(!confirmNumbers && !confirmSymbols && !confirmLowercase && !confirmUppercase) {
      window.alert("Please choose a criteria");

    // If all criteria are selected
    } else if (confirmNumbers && confirmSymbols && confirmLowercase && confirmUppercase) {
      userChoices = numbers.concat(symbols, lowercase, uppercase);
      console.log("all " + userChoices);
     
      //If no numbers are used:
    } else if (!confirmNumbers && confirmSymbols && confirmLowercase && confirmUppercase) {
      userChoices = uppercase.concat(symbols, lowercase);
      console.log( "symbols, lowercase, and uppercase " + userChoices);
    
    } else if (!confirmNumbers && !confirmSymbols && confirmLowercase && confirmUppercase) {
      userChoices = lowercase.concat(uppercase);
      console.log(" lowercase and uppercase " + userChoices);

    } else if (!confirmNumbers && !confirmSymbols && !confirmLowercase && confirmUppercase) {
      userChoices = uppercase;
      console.log(" only uppercase " + userChoices);

    } else if(!confirmNumbers && confirmSymbols && !confirmLowercase && confirmUppercase) {
      userChoices = symbols.concat(uppercase);
      console.log("symbols and uppercase " + userChoices);

    } else if(!confirmNumbers && confirmSymbols && !confirmLowercase && !confirmUppercase) {
      userChoices = symbols;
      console.log("only symbols " + userChoices);

    }else if(!confirmNumbers && !confirmSymbols && confirmLowercase && !confirmUppercase) {
      userChoices = lowercase;
      console.log("only lowercase " + userChoices);

    } else if(!confirmNumbers && confirmSymbols && confirmLowercase && !confirmUppercase) {
      userChoices = symbols.concat(lowercase);
      console.log("symbols and lowercase " + userChoices);

      // If no Symbols are used

    } else if (confirmNumbers && !confirmSymbols && !confirmLowercase && !confirmUppercase) {
      userChoices = numbers;
      console.log("numbers " + userChoices);

    } else if (confirmNumbers && !confirmSymbols && confirmLowercase && !confirmUppercase) {
      userChoices = numbers.concat(lowercase,);
      console.log("numbers and lowercase " + userChoices);

    } else if (confirmNumbers && !confirmSymbols && !confirmLowercase && confirmUppercase) {
      userChoices = numbers.concat(uppercase);
      console.log("numbers and uppercase " + userChoices);

    } else if (!confirmNumbers && !confirmSymbols && confirmLowercase && confirmUppercase) {
      userChoices = lowercase.concat(uppercase);
      console.log("lowercase and uppercase " + userChoices);

      // If no Lowercase is used
    } else if (confirmNumbers && confirmSymbols && !confirmLowercase && confirmUppercase) {
      userChoices = numbers.concat(symbols, uppercase);
      console.log("numbers, symbols, and uppercase " + userChoices);

    } else if (confirmNumbers && confirmSymbols && !confirmLowercase && !confirmUppercase) {
      userChoices = numbers.concat(symbols);
      console.log("numbers and symbols " + userChoices);


      // If no Uppercase is used
 
    } else if (confirmNumbers && confirmSymbols && confirmLowercase && !confirmUppercase) {
      userChoices = numbers.concat(symbols, lowercase);
      console.log("numbers, symbols, and lowercase " + userChoices);
    }
  
      //criteria
   // for (var i =0; i <length; i++) {
       // var password = userChoices[Math.floor(Math.random() * userChoice)];
            
   // for (var i =0; i <length; i++) {
    //          var all = userChoices[Math.floor(Math.random() * userChoice)];
            
    
    
    //console.log(password);
      
    

  //}
writePassword

        // When all prompts are answered, then a password is generated that matches selected criteria
  function writePassword() {
    for (var i = 0; i < userChoiceLength; i++) {
      var password = userChoices[Math.floor(Math.random() * userChoiceLength)];

    for (var i=0; i < length; i++) {
      var all = userChoices[Math.floor(Math.random() * userChoiceLength)];

    }  
      console.log(password);
window.alert("Your new password is " + password);
    }
    
          //console.log(password);

        //When the password is generated Then it is displayed in an alert
        window.alert("Your new password is " + all);

      }
    }
        //console.log(password);
        //When the password is generated Then it is displayed in an alert
      //window.alert("Your new password is " + password);
      
        //var result = "";
  //}

  // Write password to the #password input
  
    //if (uppercase && lowercase && numbers && symbols) {
      // Loop the array elements and choose randomly
    //for (let i =0; i < length; i++) {
    //var randomIndex = Math.floor(Math.random() * length);
    //}
  //}
  

      // Generates a random password in the console
  //function result (length) {
   // var result           = '';
   // var characters       = '!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   // var charactersLength = characters.length;
    
   // for ( var i = 0; i < length; i++ ) {
   //   result += characters.charAt(Math.floor(Math.random() * 
 //userChoice));
 //  }
 ////  return result;
//}
//var userChoices = "" ;
    //}
//When the password is generated it is displayed in an alert
//window.alert("Your new password is " + generatePassword(userChoices));


//if (confirmNumbers && confirmSymbols && confirmUppercase && confirmLowercase)
    

    //var randomIndex = ("");
// Loop the array elements and choose randomly
      //for (var i = 0; i <= userChoice; i++) {
       // const myString2 = randomIndex.toString();
        //Not Working.  Only pulling 1 random character, not up to the length
        //Also not printing on screen, only printing to console.
        //passwordText = myString2[Math.floor(Math.random() * userChoice)];
        //passwordText = (randomIndex[Math.floor(Math.random() * userChoice)]);
        //console.log(mySrting2 = [Math.floor(Math.random() * userChoice)]);
//}
//console.log(passwordText);
//Example changes numbers to strings
//const myNum2 = 123;
//const myString2 = randomIndex.toString();
//console.log(typeof myString2);

// Example changes strings to numbers
//const myString = '123';
//const myNum = Number(myString);
//console.log(typeof myNum);}