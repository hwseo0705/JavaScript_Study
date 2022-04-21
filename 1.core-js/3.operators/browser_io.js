// prompt(): allows input on browser
// alert(): allows print on browser

// above functions cannot be used in node.js, has to be on browser
var chooseNumber1 = +prompt('Choose any number!');
var chooseNumber2 = +prompt('Choose another number!');
// what the user entered are considered as strings, so in order to do an addition,
// you have to type-cast string to int in this case
alert(`${chooseNumber1} + ${chooseNumber2} = ${chooseNumber1 + chooseNumber2}!`);

// this can also work hhehehehe
// var chooseNumber1 = Number(prompt('Choose any number!'));
// var chooseNumber2 = Number(prompt('Choose another number!'));
// alert(`${chooseNumber1} + ${chooseNumber2} = ${chooseNumber1 + chooseNumber2}!`);