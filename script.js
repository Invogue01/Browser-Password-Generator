// All our variables in other words Lego pieces that we are working with
let selectUPPERCASE = "ABCDEFGHIJKLMNUP";
let selectSYMBOLS = "!£$%^&*()";
let selectNUMBERS = "0123456789";
let lowerCaseOnly = "abcdefghijklmnuptsrqwzv";
let array = "";

var generateBtn = document.querySelector("#generate");
// Series of prompts and questions to get values/ criteria for the password
function generatePassword() {
  var lengthChoice = "";
  let characters = "";
  lengthChoice = window.prompt(
    "Please choose Password length between 8 and 128 characters"
  );

  if ((lengthChoice >= 8 && lengthChoice <= 128) == true) {
  } else {
    lengthChoice = alert("you Must selected specified Password Length to continue");
    return "";
  }
  if (lengthChoice) {
    if (confirm("Would you like to include UPPER case?") == true) {
      characters += selectUPPERCASE;
    }
  }
  if (lengthChoice) {
    if (confirm("Would you like to include SYMBOLS case?") == true) {
      characters += selectSYMBOLS;
    }
  }
  if (lengthChoice) {
    if (confirm("Would you like to include NUMBERS case?") == true) {
      characters += selectNUMBERS;
    }
    if (lengthChoice) {
      if (confirm("Would you like to include LowerCase?") == true) {
        characters += lowerCaseOnly;
      }
    }
    // IF no Criteria selected show alert
    if (characters == false) {
      characters = alert("You must choose at least ONE criteria");
    }
  }
  // These two lines of code populate/ show generated password inside password box
  array = writePassword(lengthChoice, characters);
  document.getElementById("password").innerHTML = array;
}

// Randomize password and populate inside an array
function writePassword(l, characters) {
  var array = "";

  for (let index = 0; index < l; index++) {
    array += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return array;
}
// Add event listener to red generate button
generateBtn.addEventListener("click", generatePassword);
