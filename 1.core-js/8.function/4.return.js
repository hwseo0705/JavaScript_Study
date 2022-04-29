// use 'return' to exit function
function add(n1, n2) {
    console.log(`${n1} + ${n2} = ${n1 + n2}`);
    return n1 + n2;
    console.log('this will never be printed');
}

function multi(n1, n2) {
    console.log(`${n1} x ${n2} = ${n1 * n2}`);
}

function callName(nickName) {
    // prohibited list
    var prohibits = ['Bitch', 'Dick', 'Ass'];
    if (prohibits.includes(nickName)) {
        console.log(`No Bad Nicknames Plz`);
        return;
    } // end if
    console.log(`Hello, ${nickName}!`);
} // end callName

function foo() {
    var n = 1;
    while (n < 5) {
        if (n === 2) {
            break; // or return;
        }
        n++;
    } // end while
    console.log(`loop finished!!`);
} // end foo

// ---------------------------------------------------------------------- //

// Function call
// both print, but only add has a return value
// A function without return should not be stored in a variable.
var r1 = add(10, 20);
var r2 = multi(5, 3);
console.log(`r1: ${r1}, r2: ${r2}`);

console.log(`------------------------------------------`);

// undefined r3
var r3 = multi(add(2, 4), add(5, 1));
console.log(`r3: ${r3}`);

// NaN r4
// a function without return cannot be used as an argument of a function
var r4 = add(multi(3, 2), add(4, add(6, 3)));
console.log(`r4: ${r4}`);

console.log(`------------------------------------------`);
callName('Julie');
callName('Bitch');

console.log(`------------------------------------------`);
// when it's return, nothing is printed
// if it's break, 'loop finished' is printed
foo();

console.log(`------------------------------------------`);

// The return value of the function is always one!
// can I return 4 values after +-*/ 2 values that were passed in?
// yes, just use an array
function operateAll(n1, n2) {
    // you could do this but...
    // var obj = {
    //     add: n1 + n2,
    //     subtract: n1 - n2,
    //     multiply: n1 * n2,
    //     divide: n1 / n2
    // };
    // return obj;

    // but apparently do this?
    return {
        add: add(n1, n2),
        subtract: n1 - n2,
        multiply: n1 * n2, // can't do multi(n1, n2) cuz no return
        divide: n1 / n2
    };
}

var resultList = operateAll(10, 5);
console.log(`operate - : ${resultList.subtract}`);
console.log(`operate * : ${resultList.multiply}`);