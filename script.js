const PASSWORD_MIN_LENGTH = 10;
const PASSWORD_MAX_LENGTH = 64;

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

getPasswordLength = () => {
  const passwordLengthInput = prompt(`How many characters would you like your password to have? It must be between at least ${PASSWORD_MIN_LENGTH} characters and no more then ${PASSWORD_MAX_LENGTH}.`);
  
  // check input is a number
  const passwordLength = parseFloat(passwordLengthInput);
  if (isNaN(passwordLength)) {
    alert(
      "please enter a valid number."
    )
    return;
  }

  // ensure number entered is within limits
  if (passwordLength < PASSWORD_MIN_LENGTH || passwordLength > PASSWORD_MAX_LENGTH) {
    alert(
      `The password length must be between 10 and 64. ${passwordLength} is not valid`
    )
    return;
  }

  return passwordLength;
}

// Function to prompt user for password options
function getPasswordOptions() {
      // ask for password length
      const passwordLength = getPasswordLength();
      if (typeof(passwordLength) !== "number") {
        return "Invalid requirements";
      }

  
      // ask for character types
  
          // Lowercase
  
          // Uppercase
  
          // Numeric
  
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
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