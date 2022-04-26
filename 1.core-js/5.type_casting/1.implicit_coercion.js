// addition: implicit coercion to string
var ex1 = 10 + '20'; // '1020'
console.log(`ex1 value: ${ex1}`);
console.log(`ex1 type: ${typeof ex1}\n`);

var ex2 = '' + 300; // '300'
console.log(`ex2 value: ${ex2}`);
console.log(`ex2 type: ${typeof ex2}\n`);

var ex3 = false + '';
console.log(`ex3 value: ${ex3}`);
console.log(`ex3 type: ${typeof ex3}\n`);

var ex4 = 'hello' + 10 + 20; // 'hello1020'
console.log(`ex4 value: ${ex4}`);

var ex5 = 'hello' + (10 + 20); // 'hello30'
console.log(`ex5 value: ${ex5}`);

var ex6 = 10 + 20 + 'hello'; // '30hello' 
console.log(`ex6 value: ${ex6}`);

// subtraction & multiplication: implicit coercion to number
var ex7 = 10 - '4'; // if it's '4!' --> NaN
console.log(`ex7 value: ${ex7}`);

var ex8 = 50 * '3'; // '50' * '3' --> 150
console.log(`ex8 value: ${ex8}`);

console.log(`------------------------------------------`);

console.log(+'');
console.log(+'100');
console.log(+true);
console.log(+false);
console.log(+null);