// Assignment code here

//Arrays to choose from
  var numbers = [1,2,3,4,5,6,7,8,9];
  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(",")"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var passwordlength = [""];

// Loop the array elements and choose randomly

randomIndex = Math.floor(Math.random() * length);
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var generateBtn = document.querySelector("#generate");
// Window Prompts
    var passwordLength = window.prompt("Select length between 8 and 128");
    console.log("password length " + passwordLength);

    window.confirm("Would you like to use numbers?") 
    if (numbers === true) {
    var computerChoice = numbers[index];
    }
   console.log("numbers have been selected " + numbers);


   window.confirm("Would you like to use symbols?") 
   if (symbols === true) {
    var computerChoice = symbols[index];
   }
   console.log("symbols have been selected " + symbols);

   window.confirm("Would you like to use uppercase?") 
   if (uppercase === true) {
    var computerChoice = uppercase[index];
   }
    console.log("uppercase have been selected " + uppercase);

   window.confirm("Would you like to use lowercase?") 
    if (lowercase === true) {
    var computerChoice = lowercase[index];
   }
    console.log("lowercase have been selected " + lowercase);


    if (uppercase && lowercase && numbers && symbols) {
      // Loop the array elements and choose randomly
    for (let i =0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * length);
    }
    }
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  if (uppercase && lowercase && numbers && symbols) {
    // Loop the array elements and choose randomly
  for (let i =0; i < length; i++) {
  var randomIndex = Math.floor(Math.random() * length);
  }
  }
}
// If no number is entered, prompt user to enter a number


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
