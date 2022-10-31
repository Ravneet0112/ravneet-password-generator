// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("You clicked the button");

  var length = prompt("Length of the password?");

  if (isNaN(length)) {
    alert("Please enter an integer");
    return;
  }


  if (parseInt(length) < 8 || parseInt(length) > 128) {
    alert ("Please enter number more than 8 or less than 128");   
    return; 
  }

  var lower = confirm("Do you want to include lower case");
  var upper = confirm("Do you want to include uppercase");
  var symbol = confirm("Do you want to include symbol");
  var number = confirm("Do you want to include number");

  let result = '';
 
  for (var i =0; i<parseInt(length); i++){
   
    if(lower === true) {
     // var lowercase = console.log(getRandomLower());
      result += (getRandomLower());
      }
       
    if (upper === true) {
     // var uppercase = console.log(getRandomUpper()); 
      result += (getRandomUpper());
       }
        
    if (symbol === true) {
      //var symbolcase = console.log(getRandomSymbol()); 
      result += (getRandomSymbol());
    }
    
    if (number === true) {
      //var numbercase = console.log(getRandomNum());
      result += (getRandomNum()); }
    }

    if (lower === false && upper === false && symbol === false && number == false){
      alert("Please select at least one condition");
    }

    let generatedPassword = (result.slice(0, parseInt(length)));
    return generatedPassword;
    }


   //function getresult(lowercase, uppercase, symbolcase, numbercase) {}
      /*let generatedPassword = '';

      const typesCount = lower + upper + number + symbol;

      const typeArr = [ lower , upper , number , symbol ]
      console.log(typesCount)
      .filter(item => Object.values(item)[0]);
      console.log('typeArr ', typeArr);

      if (typesCount === 0){
        return '';
      
      }
  }

/*const randomFunc = {
  lower: getRandomLower(),
  /*upper: getRandomUpper,
  number: getRandomNum,
  symbol: getRandomSymbol,}*/

// const lowecaserEL = document.getElementById('lowercase');
/*
const uppercaseEL = document.getElementById('lowercase');
const numberEL = document.getElementById('lowercase');
const symbolcaseEL = document.getElementById('lowercase');
const lengthEL = document.getElementById('length');
const resultEL = document.getElementById('result'); */

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}


  function getRandomLower(){
    //gets lowercase # from the char code 97-123
    // Math.random is a decimal value to change it to a whole number
    // Math.floor is used
    return String.fromCharCode(Math.floor(Math.random()* 26) + 97);

  }
  

  function getRandomUpper(){
    //Upper case letters start from 65 to 96
    return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
  }

  function getRandomNum(){
    //Numbers starts from 48
    return String.fromCharCode(Math.floor(Math.random()* 10) + 48);
  }

  function getRandomSymbol(){
    //Upper case letters start from 65 to 96
    const symbols = '!@#$%^&*()_+{}[]<>?|/=-,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
