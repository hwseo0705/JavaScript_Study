// Define function

// The basics of function definition 1
function add(n1, n2) {
    return n1 + n2;
}

// The basics of function definition 2
// function literal (Express the function as a value)
// don't need function name, but it is a literal now, so
// you need to add a semicolon at the end
// var sub = function() {};
var sub = function (n1, n2) {
    return n1 - n2;
};

// this is calling 'add' function and saving it to 'plus'
// so 'plus' type is number
// var plus = add(10 , 5);
// this one is saving the function to 'plus'
// so the type is function
var plus = add;

// this is good because you want to specify the name in detail
// but if it is called multiple times, you don't want to write the whole name
// so you could make a variable that has a shorter name :) you know?
function removeBoardArticleWithReplyText() {}
var rb = removeBoardArticleWithReplyText;
rb();

// ES6+ Arrow Function
function multiply(n1, n2) {
    return n1 * n2;
}

var multiply = function (n1, n2) {
    return n1 * n2;
};

// this is a very simple way of doing the above two
// you can call it by doing multiply(10, 10);
// If the only content of the function is a return statement, it can be omitted
var multiply = (n1, n2) => n1 * n2;

var sayNickname = function(nick) {
    console.log(`Hello, ${nick}`);
    return nick + ` lol~`;
}

var sayNickname = (nick) => {
    console.log(`Hello, ${nick}`);
    return nick + ` lol~`;
}

// the same thing as the following
var hello = function () {
    console.log(`hello!!!!`);
}

// if the function is one line, you can omit {}
// isn't it beautiful lol
// can call it by saying hell();
var hello = () => console.log(`hello!!!!`);

//When one integer is passed, it returns the square value of the integer.
// Write the arrow function SQRT.

var sqrt = (n) => n ** 2;

// a function inside a function
// outer function
function outer() {
    console.log(`outer call!`);
    // inner function can only be called inside the outer function
    function inner() {
        console.log(`inner call!`);
    }
    inner();
    inner();
}

// recursive function
function countdown(n) {
    if (n < 0) {
        return;
    }
    console.log(`${n}!!`);
    countdown(n-1);
}

///////////////////////// Question /////////////////////////

/*

compute(4) ->  return compute(3) + compute(1)
compute(3) ->  return compute(2) + compute(0)
compute(2) ->  return compute(1) + compute(-1)
compute(1) ->  return 1;
compute(0) ->  return 0;
compute(-1) -> return -1;

----------------------------------------

compute(4) ->  return 0 + 1 = 1
compute(3) ->  return 0 + 0 = 0
compute(2) ->  return 1 + -1 = 0
compute(1) ->  return 1;
compute(0) ->  return 0;
compute(-1) -> return -1;

*/

function compute(num) {
    if (num <= 1) return num;
    return compute(num - 1) + compute(num - 3);
}

var r = compute(4);
console.log(`~~~~~~~~~~~~~~~~~~~ ${r} ~~~~~~~~~~~~~~~~~~~`);

///////////////////////// Question /////////////////////////

// -------------------------------------------------------------------------------- //
// immediately invoked function expression --> Immediate execution without calling
// Code execution
(function () {
    var a = 10,
        b = 20;
    console.log(a + b);

    console.log(`------------------------------------------`);

    console.log(`type of sub: ${typeof sub}`);
    console.log(`sub(10, 3): ${sub(10, 3)}`);
    console.log(`type of plus: ${typeof plus}`);
    // because 'plus' is the same and function 'add', it works the same-ish


    console.log(`------------------------------------------`);

    console.log(plus(20, 30));

    hello();
    console.log(sqrt(2));

    console.log(`------------------------------------------`);

    // this only returns outer() cuz u didn't call inner()
    // you cannot call inner() by itself --> not defined
    // so if you call inner() inside outer(), it will show
    outer();

    console.log(`------------------------------------------`);

    countdown(5);

})();



