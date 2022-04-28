function makeLine() {
    console.log(`------------------------------------------`);
}

// area of a circle: pi * r ** 2
var pi = 3.14159265;

// radius 5
var circle1 = pi * 5 ** 2;

// radius 17
var circle2 = pi * 17 * 2; // mistakeeeee

// define function circleArea
function calcAreaCircle(r) {
    return pi * r ** 2;
}

var result1 = calcAreaCircle(5);
console.log(result1);

makeLine();

var result2 = calcAreaCircle(17);
console.log(result2);