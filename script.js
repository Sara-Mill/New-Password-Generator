// Assignment code here

//Arrays to choose from
  var numbers = [1,2,3,4,5,6,7,8,9];
  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(",")"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var PasswordLength = [""];
  var randomIndex = numbers.concat(symbols, lowercase, uppercase);
    console.log(randomIndex);

// Write password to the #password input
  function writePassword() {
    var password = generatePassword() 
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  
    //if (uppercase && lowercase && numbers && symbols) {
      // Loop the array elements and choose randomly
    //for (let i =0; i < length; i++) {
    //var randomIndex = Math.floor(Math.random() * length);
    //}
  //}
  }
  
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
    

    // Window Prompts
    function generatePassword() {

      var passwordLength = window.prompt("Select length between 8 and 128");
      console.log("password length " + passwordLength);
      // If no number is entered, prompt user to enter a number  
      if(passwordLength < 8 || passwordLength > 128) {
          (window.alert("Please select between 8 and 128"));
          return; 
        } 
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
    //var randomIndex = ("");
// Loop the array elements and choose randomly
      for (var i = 0; i <= length; i++) {

        //Not Working.  Only pulling 1 random character, not up to the length
        //Also not printing on screen, only printing to console.
      passwordText = randomIndex[Math.floor(Math.random() * passwordLength)]
        console.log("new password " + randomIndex[Math.floor(Math.random() * passwordLength)]);
}
console.log(randomIndex);
}