// Assignment code here
// Generate Password length prompts
var generate = document.querySelector("#generate");

generate.addEventListener("click", askprompts);

function askprompts() {
  window.prompt("Enter a desired password length of 8 to 128 characters")
} l

// if (onclick.generate) {
  // window.prompt("Enter a desired password length of 8 to 128 characters")
// }

 
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
