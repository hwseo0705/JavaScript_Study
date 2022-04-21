// guess the year you were born
var userName = prompt("What is your name?");
var userAge = +prompt("How old are you?");
var currentTime = new Date();
var year = currentTime.getFullYear();
var birthYear = year - userAge + 1;
alert(`${userName} was born in ${birthYear}!`);