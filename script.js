// Variables:
var abcCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcCapArr = abcCap.split("");
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var sym = "!@#$%^&*()_+-=";
var numArr = num.split("");
var symArr = sym.split("");

// Assignment Code
var gen = document.querySelector("#generate");
gen.addEventListener("click", function (){
  pw=generatePassword();
  document.getElementById("password").placeholder = pw;
});


// Write password to the #password input
function passGen() {
  var allChars = [];
  var resultPass = "";

  var passwordLength = prompt("How many characters long do you want your password? Requirement: More Than 8, Less Than 128.");
    if(passwordLength < 8 || passwordLength > 128){
      alert("Please try again, password must be more than 8 characters but less than 128 characters long.");
    }

    else{
    if (confirm("Do you want lowercase (e.g.: a, b, c, etc.) letters in the password?")) {
      Array.prototype.push.apply(allChars, abcLowerArr);
    }
    if (confirm("Do you want capitalizied (e.g.: A, B, C, ETC.) letters in the password?")) {
      Array.prototype.push.apply(allChars, abcCapArr);
    }

    if (confirm("Do you want numbers (e.g.: 1, 2, 3, Etc.) in the password?")) {
      Array.prototype.push.apply(allChars, numArr);
    }

    if (confirm("Do you want symbols (e.g.: $, %, @) in the password?")) {
      Array.prototype.push.apply(allChars, symArr);
    }
    if (allChars.length === 0){
      alert("Please choose atleast one option to get a password generated!");
    }
    else {
      for(var i = 0; i < passwordLength; i++) {
        var random = Math.floor(Math.random() * allChars.length);
        resultPass += allChars[random];
      }
    }
  }

  document.getElementById("password").innerHTML = resultPass;
}