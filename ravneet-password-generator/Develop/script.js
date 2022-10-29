// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  var passwordlength = prompt("Length of the password?");

  function showResponse(passwordlength){
  passwordlength.preventDefault();
  if (isNaN(passwordlength)){   
    console.log("Please enter a integer!");
  }}


  
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
