// a function that repeats N times and does certain work
function foo(n, f) {
    for (var i = 0; i < n; i++) {
        // looping function
        f();
    }
}

foo(3, function () {
    console.log('Hello?');
});

console.log('~~~~~~~~~~~~~~~~~~~~~~~');

foo(4, function () {
    console.log('Good-Bye~');
    console.log('See you again!');
})

console.log('~~~~~~~~~~~~~~~~~~~~~~~');

foo(2, () => console.log('Arrow Function'));

console.log(`------------------------------------------`);

// If you pass integer N, the function that outputs the number 
// from 1 to N according to certain conditions.
// cb (callback function) : contains i's condition
function showNumber(n, cb) {
    for (var i = 1; i <= n; i++) {
        if (cb(i)) {
            console.log(i);
        }
    }
}

// multiples of 3 between 1 ~ 10
showNumber(10, function (x) {
    return x % 3 === 0;
});

// same thing as above
// showNumber(10, x => x % 3 === 0);

console.log('~~~~~~~~~~~~~~~~~~~~~~~');

// multiples of 24 betwween 1 ~ 100
showNumber(100, function (m) {
    return m % 24 === 0;
});

// same thing as above
// showNumber(10, m => m % 24 === 0);

console.log('~~~~~~~~~~~~~~~~~~~~~~~');

// wanna print odd #s 1 ~ 20 but also print 'hello'
showNumber(20, function (j) {
    if (j % 2 === 1) {
        console.log('Hello');
        return true;
    }
});

console.log(`------------------------------------------`);

const numbers = [10, 20, 30, 22, 63, 250];

// it filters the array with the function given as an argument: filter()
const result = numbers.filter(numbers => numbers % 10 === 0);

console.log(result);

// var results = numbers.finter(function(n) {
//     return n <= 50;
// });

// console.log(results);

// write my own filter()
function customFilter(numbers, func) {
    var arrayReturn = [];
    for (var i = 0; i < numbers.length; i++) {
        if (func(numbers[i])) {
            arrayReturn.push(numbers[i]);
        }
    }
    return arrayReturn;
}

var results = customFilter(numbers, n => n <= 50);

console.log(results);