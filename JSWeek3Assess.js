// Assignment Code
var generateBtn = document.querySelector("#generate");

var choices = [];

var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!","@","#","%","^","*"];
var CharecterCode = Array.from(Array(26)).map( (_, i) => i + 97);
var lowercaseLetters = CharecterCode.map(code => String.fromCharCode(code)); 
var upperCasletters = lowercaseLetters.map(letter => letter.toUpperCase());

//All vars above is props to James Q Quick on his youtube video Build a password generator with vanilla JS

function getPrompts(){ //This whole function i must give my props to Daniel Vega on youtube since this whole function is inspired from his video 
    choices = [];

    charecterLength = parseInt(prompt("How Many Charecters Do You Want?"));
    if(isNaN(charecterLength) || charecterLength < 8 || charecterLength > 128){
        alert("Password Needs To Be Between 8 - 128 Charecters");
        return false;
    }

    if (confirm("Would you like lower case's in the password?")){
        choices = choices.concat(lowercaseLetters);
    }

    if (confirm("Would you like upper case's in the password?")){
        choices = choices.concat(upperCasletters);
    }

    if (confirm("Would you like symbols in the password?")){
        choices = choices.concat(symbols);
    }

    if (confirm("Would you like numbers in the password?")){
        choices = choices.concat(numbers);
    } else {
        choices = [" Bob "];
    }
    return true;
}

function generatePassword(){
    var password = "";
    for(var i = 0; i < charecterLength; i++){
        var random = Math.floor(Math.random() * choices.length)
        password = password + choices[random];
    }
    return password;
}

function writePassword() {
   var correctPrompts = getPrompts();

  if(correctPrompts){ 
    var genpassword = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = genpassword;
  } else {
    passwordText.value = "";
  }

}

generateBtn.addEventListener("click", writePassword);