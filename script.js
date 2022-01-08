// Assignment Code
// 1. When button clicked present prompts to select criteria 
// 2. Needs to prompt character length (min8 max128 characters), upperCase, specialSymbols, numbers
// 3. 4 prompts in total
// 4. Validate wh// d. if ONLY password length selected return ALL LOWER CASE password usat user selected (input) if nothing selected make an alert informing that they MUST choose
// 5. Ask to at least choose character length (how long is password)
// 6. After password length selected and any other criteria is selected we need to validate (check what user entered/selected)
// a. validate (check what user entered) and use what user selected to generate password

// 7. right a function that will use numbers, letters, symbols  and so on to do the Math and generate random password.
// a. i need to create var (or lego pieces) for each criteria as in UpperCase, Numbers, Symbols and so on.
// b. use created var to randomly pick a character Math.floor (random)
// c. add up (concat) all selected criteria to generate password.
// ing ONLY lowerCase letters. Otherwise generate password according to user selected criteria.
const selectUPPERCASE = "ABCDEFGHIJKLMNUP";
const selectSYMBOLS = "!£$%^&*()"
const selectNUMBERS = "0123456789"
const lowerCaseOnly = "abcdefghijklmnuptsrqwzv"

var generateBtn = document.querySelector("#generate");
generate.addEventListener('submit', e => {
  e.preventDefault()
  const password= generatePassword(selectUPPERCASE, selectNUMBERS, selectSYMBOLS)
const selectUPPERCASE = selectUPPERCASE.value
const selectSYMBOLS = selectSYMBOLS.value
const selectNUMBERS = selectNUMBERS.value
})

function generatePassword() {
  let lengthChoice = window.prompt ("Please choose Password length between 8 and 128 characters");

  if ((lengthChoice >= 8 && lengthChoice < 128) == true) {
    alert ("Thank you");
  }
  else { lengthChoice =
  alert ("you Must selected Password Length to continue")
  return ""
  }
  let selectUPPERCASE = confirm ("Would you like to include UPPER case?")
  let selectNUMBERS = confirm("Would you like to include Numbers?")
  let selectSYMBOLS = confirm("Would you like to include Symbols?")
}




// Write password to the password input
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");



   passwordText.value = password;


}
// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

