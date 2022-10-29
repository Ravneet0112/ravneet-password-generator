// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  console.log("You clicked the button");

  var length = prompt("Length of the password?");
  var lowercase = promt("Do you want to include lower case");
  var uppercase = promt("Do you want to include uppercase");
  var symbol = promt("Do you want to include symbol");
  var number = promt("Do you want to include number");
}


const lowecaserEL = document.getElementById('lowercase');
const uppercaseEL = document.getElementById('lowercase');
const numberEL = document.getElementById('lowercase');
const symbolcaseEL = document.getElementById('lowercase');
const lengthEL = document.getElementById('length');

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  var length = prompt("Length of the password?");


  passwordText.value = password;


 /* function showResponse(passwordlength){
  passwordlength.preventDefault();
  if (isNaN(passwordlength)){   
    console.log("Please enter a integer!");
  }}*/
}
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNum,
  symbol: getRandomSymbol
};


  function getRandomLower(){
    //gets lowercase # from the char code 97-123
    // Math.random is a decimal value to change it to a whole number
    // Math.floor is used
    return String.fromCharCode(Math.floor(Math.random)* 26 + 97);
  }

  function getRandomUpper(){
    //Upper case letters start from 65 to 96
    return String.fromCharCode(Math.floor(Math.random)* 26 + 65);
  }

  function getRandomNum(){
    //Numbers starts from 48
    return String.fromCharCode(Math.floor(Math.random)* 26 + 65);
  }

  function getRandomSymbol{
    //Upper case letters start from 65 to 96
    const symbols = '!@#$%^&*()_+{}[]<>?|/=-,.';
    return symbols[Math.floor(Math.random() * symbols.lenght)];
  }

  
 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
