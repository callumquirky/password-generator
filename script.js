// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let hasSepecialCharacters = true;
let hasNumericCharacters = true;
let hasLowerCasedCharacters = true;
let hasUpperCasedCharacters = true;
let passwordLength = 0;
let passwordLengthIsInteger = true;

// Function to prompt user for password options
function getPasswordOptions() {
  while (passwordLength < 10, passwordLengthIsInteger == false) {
		passwordLength = prompt ("Please specify password length between 8 and 164 characters");
		passwordLengthIsInteger = Number.isInteger(passwordLength)
	}
	hasSpecialCharacters = confirm("Do you want special characters in your password?");
	hasNumericCharacters = confirm("Do you want numeric characters in your password?");
	hasLowerCasedCharacters = confirm("Do you want lower cased characters in your password?");
	hasUpperCasedCharacters = confirm("Do you want upper characters in your password?");
}

// Function for getting a random element from an array
function getRandom(arr) {
  Math.floor(Math.random() * arr.length);
  return;
}

// Function to generate password with user input
function generatePassword() {
  let generatedPassword = ""
  for (let i=0; i < passwordLength; i++){
    if (hasSpecialCharacters) == true {
    generatedPassword =+ getRandom(specialCharacters);
    }
    if (hasNumericCharacters) == true {
    generatedPassword =+ getRandom(numericCharacters); 
    }
    if (haslowerCasedCharacters) == true {
    generatedPassword =+ getRandom(lowerCasedCharacters);
    }
    if (hasUpperCasedCharacters) == true {
    generatedPassword =+ getRandom(lowerCasedCharacters);
    }
  return generatedPassword;
    }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);