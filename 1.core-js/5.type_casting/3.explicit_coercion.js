// explicit coercion --- string
var a = 10, b = 20;
//var result1 = a + b;

// I want to make this in to '1020' instead of 30
// var result1 = '' + a + b;
// var result1 = String(a) + String(b);
var result1 = a.toString() + b.toString();

console.log(`result1: ${result1}`);

console.log(`------------------------------------------`);

// explicit coercion --- number
var m = '10', n = '5.5';
//var result2 = m + n;

// I want to add the numbers up instead of string
// var result2 = +m + +n;
// var result2 = Number(m) + Number(n);
// var result2 = parseInt(m) + parseInt(n); --> this one removes the decimals
var result2 = parseInt(m) + parseFloat(n);

console.log(`result2: ${result2}`);

console.log(`------------------------------------------`);

// explicit coercion --- Boolean
var logic = null;
// var result3 = Boolean(logic);
var result3 = !!logic; // --> negating twice will show its bool val 

console.log(`result3: ${result3}`);
