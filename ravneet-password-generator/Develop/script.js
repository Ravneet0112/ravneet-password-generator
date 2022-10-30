// Assignment Code
var generateBtn = document.querySelector("#generate");





  console.log("You clicked the button");

  var length = prompt("Length of the password?");

  if (isNaN(length)) {
    alert("Please enter an integer");
  }


  if (parseInt(length) < 8 || parseInt(length) > 128) {
    alert ("Please enter number more than 8 or less than 128");
    
  }


  var lower = prompt("Do you want to include lower case");
  var upper = prompt("Do you want to include uppercase");
  var symbol = prompt("Do you want to include symbol");
  var number = prompt("Do you want to include number");
 
  function generatePassword(lowercase, uppercase, symbol, number){

  
}

const randomFunc = {
  lowercase: getRandomLower,
  /*upper: getRandomUpper,
  number: getRandomNum,
  symbol: getRandomSymbol,*/
};

console.log(lowercase);


// const lowecaserEL = document.getElementById('lowercase');
/*
const uppercaseEL = document.getElementById('lowercase');
const numberEL = document.getElementById('lowercase');
const symbolcaseEL = document.getElementById('lowercase');
const lengthEL = document.getElementById('length');
const resultEL = document.getElementById('result'); */

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  


  


 /* function showResponse(passwordlength){
  passwordlength.preventDefault();
  if (isNaN(passwordlength)){   
    console.log("Please enter a integer!");
  }}*/
}


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

  function getRandomSymbol(){
    //Upper case letters start from 65 to 96
    const symbols = '!@#$%^&*()_+{}[]<>?|/=-,.';
    return symbols[Math.floor(Math.random() * symbols.lenght)];
  }

  
 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
