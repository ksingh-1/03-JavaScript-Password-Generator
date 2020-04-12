// Variables:
var abcUpper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcLower="abcdefghijklmnopqrstuvwxyz";
var abcUpperArr= abcUpper.split(" ");
var abcLowerArr=abclower.split(" ");

var num="0123456789";
var sym="!@#$%^&*()_+-=";
var numArr=num.split(" ");
var symArr=sym.split(" ");

// Assignment Code
var generateBtn = document.querySelector("#generate");
get.addEventListener("click", function (){
  pw=generatePassword();
  document.getElementById("password").placeholder=pw;
});


// Write password to the #password input
function generatePass() {
  var allChars=[];
  var resultPass="";

  var passwordLength=parseInt(prompt("How many characters long do you want your password?"));
    if(passwordLength<8 || passwordLength>128){
      alert("Please try again, password must be more than 8 characters but less than 128 characters long.");
      return
    }

    else{
    if(confirm("Do you want lowercase letters in the password?")){
      Array.prototype.push.apply(allChars,abcLowerrArr);
    }
    if(confirm("Do you want uppercase letters in the password?")){
      Array.prototype.push.apply(allChars, abcUpperArr);
    }

    if(confirm("Do you want numbers in the password?")){
      Array.prototype.push.apply(allChars, numArr);
    }

    if(confirm("Do you want symbols in the password?")){
      Array.prototype.push.apply(allChars, SymArr);
    }
    if(allChars.length===0){
      alert("Please choose atleast one option to get a password generated!");
    }
    else {
      for(vari=0; i < passwordLength; i++) {
        var random=Math.floor(Math.random()*allChars.length);
        resultPass+=allChars[random];
      }
    }
  }