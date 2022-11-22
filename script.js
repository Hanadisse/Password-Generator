// Assignment Code
//data input for the password
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword)

function generatePassword() {
  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~", "=", "@", "^"];
  var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // little message letting you know how much charcters you want in your password and lengths from 8-128.
  // if you did not enter a number from 8-128 it will not let you proceed
  var preReady = []
  var postReady = ""

  var numberOfCharacters = prompt("Choose how long you want your password to be at least 8 characters minium and 128 characters maxium")
  if (numberOfCharacters < 8 || numberOfCharacters > 128 || isNaN(numberOfCharacters)) {
    alert("Invalid password length, Please retry")
  } else {
    // validating uppercase letters characters
    if (confirm("would you like uppercase letters in your character?")) {
      preReady = preReady.concat(uppercaseCharacters)
    }
    // validating lowercase letters characters
    if (confirm("would you like lowercase letters in your character?")) {
      preReady = preReady.concat(lowercaseCharacters)
    }
    // validating number characters
    if (hasNumbers = confirm("would you like Numbers in your character?")) {
      preReady = preReady.concat(numericCharacters)
    }
    // validating special key characters
    if (hasSpecial = confirm("would you like Special keys in your character?")) {
      preReady = preReady.concat(specialCharacters)
    }
    if (preReady.length === 0) {
      alert("You must have to at least have one character");
    } else {
      for (let i = 0; i < numberOfCharacters; i++) {
        let rng = Math.floor(Math.random() * preReady.length);
        // generated password final & rng
        postReady += preReady[rng];
      }
    }
    document.getElementById("password").innerHTML = postReady
  }
};