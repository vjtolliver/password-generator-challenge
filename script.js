// Assignment code here
// Generate Password length prompts
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", askprompts);

var lengthArr = [8, 9, 10, 11, 12, , 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 120, 121, 122, 123, 124, 125, 126, 127, 128]
var lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var spclArr = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"]
var choiceArr = []
var userArr = []



// Created first window prompt
function askprompts() {
  var userChoice = window.prompt("Enter a desired password length of 8 to 128 characters")
  if (userChoice > 7 && userChoice < 129) {
    choiceArr.push(userChoice);
    console.log(choiceArr)
    window.confirm("You chose " + userChoice + " characters.");
    askLowercase ();
  } else {
    window.alert("Error: Unauthorized input. Please try again.");
  }


function askLowercase() {
  var userInput = window.confirm("Do you want to include lowercase letters in your password?")
  if (userInput) {
    userArr.push(...lowercaseArr);
    console.log(choiceArr);
    console.log(userArr);
    askUppercase ();
  } else {
    askUppercase ();
  }
}

function askUppercase() {
  var userInput = window.confirm("Do you want to include uppercase letters in your password?")
  if (userInput) {
    userArr.push(...uppercaseArr);
    console.log(choiceArr);
    console.log(userArr);
    askNumbers ();
  } else {
    askNumbers ();
  }
}

function askNumbers () {
  var userInput = window.confirm("Do you want to include numbers in your password?")
  if (userInput) {
    userArr.push(...numArr);
    console.log(choiceArr);
    console.log(userArr);
    askSpcl ();
  } else {
    askSpcl ();
  }
}


function askSpcl () {
  var userInput = window.confirm("Do you want to include special characters in your password?")
  if (userInput) {
    userArr.push(...spclArr);
    console.log(choiceArr);
    console.log(userArr);
        
       pwInput = []
          
          if (pwInput < choiceArr) {
            
            for (var i = 0; i < choiceArr; i++) {
            var rndmPassword = Math.floor(Math.random() * userArr.length);
            
      
            var pwIndex = userArr[rndmPassword];
            
            console.log(pwIndex);
          
            pwInput.push(pwIndex);
            
      
          } 
          console.log(pwInput);
          window.alert("Your new password is: " + pwInput.join(""));
          return;
        }
      
      
  } else {
    pwInput = []
     if (userArr === undefined) {
      window.alert("ERROR: At least one character type must be selected!");
      return;
    } else if (pwInput < choiceArr) {
      
      for (var i = 0; i < choiceArr; i++) {
      var rndmPassword = Math.floor(Math.random() * userArr.length);
      
      

      var pwIndex = userArr[rndmPassword];
      
      console.log(pwIndex);
    
      pwInput.push(pwIndex);
      

    } 
    console.log(pwInput);
    window.alert("Your new password is: " + pwInput.join(""));
    return;
  } 
  // else if (userArr === undefined) {
  //   window.alert("ERROR: At least one character type must be selected!");
  // }
}
}

 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
  // console.log(password)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
return;
}