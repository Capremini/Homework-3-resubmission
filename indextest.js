//var confirmName = prompt("Hello, Whats Your Name?");
//var confirmPassword = confirm("Welcome Would you like a new password?");
//var confirmCharacters = prompt("Pick between 8 - 128 Characters");
//var confirmUppercase = confirm("Would You like UpperCase values?");
//var confirmLowercase = confirm("Would You like LowerCase values?");
//var confirmNumbers = confirm("Would You like Numbers");
//var confirmSymbols = confirm("Would You like Symbols?");

//DOM elements

const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');


const randomFunc = {
  
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateEL.addEventListener('click', () => {
 const length = lengthEl.value;
 const hasUpper = uppercase.checked;
 const hasLower = lowercase.checked;
 const hasNumber = number.checked;
 const hasSymbol = symbol.checked;
  
  generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
 });
// Generator functions

function getRandomUpper() { 
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
 
function getRandomLower() { 
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
  
function getRandomNumber() { 
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() { 
  const symbols = "!@#$%^&*()+=-_?[]{};,.|/`~"
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//console.log(getRandomSymbol());


  if (confirmName) {
 alert = ("Welcome: Would you like a new password? " + confirm);

else {
  alert("Pick A number Between 8 - 128");
}
  }