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
  
  // convert input to a number
  const passwordLength = parseFloat(passwordLengthInput);
  return passwordLength;
}

// Function to prompt user for password options
function getPasswordOptions() {
      // ask for password length
      const passwordLength = getPasswordLength();

      // Lowercase
      const hasLowercase = confirm("Would you like lowercase characters?");

      // Uppercase
      const hasUppercase = confirm("Would you like uppercase characters?");

      // Numeric
      const hasNumeric = confirm("Would you like numeric characters?");

      // Special Characters
      const hasSpecialCharacters = confirm("Would you like special characters?");

      // Pass back password options
      const passwordOptions = {
        passwordLength: passwordLength,
        hasLowercase: hasLowercase,
        hasUppercase: hasUppercase,
        hasNumeric: hasNumeric,
        hasSpecialCharacters,
        isPasswordLengthANumber: function() {
          return isNaN(this.passwordLength);
        },
        isPasswordLengthWithinLimits: function() {
          return (this.passwordLength >= PASSWORD_MIN_LENGTH && this.passwordLength <= PASSWORD_MAX_LENGTH);
        },
        hasValidCharacterTypes: function() {
          return (this.hasLowercase || this.hasUppercase || this.hasNumeric || this.hasSpecialCharacters);
        }
      }
      return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  const passwordOptions = getPasswordOptions();
  console.log(passwordOptions);
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