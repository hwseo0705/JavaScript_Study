// 1. Do not allow duplicate declaration
// syntax error
let x = 10;
// let x = 100; // don't do dis
console.log(x);

// 2. Block level scope is supported
let y = 'Hello';
if (true) {
    let y = 'Bye'; // local to if
}
console.log(y);

// 3. no variable hoisting
z = 100;
console.log(z);

// let z;