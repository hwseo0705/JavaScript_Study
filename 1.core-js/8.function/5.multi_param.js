// A function that returns the sum when two integers are passed in
function add2(n1, n2) {
    return n1 + n2;
}

// A function that returns the sum when three integers are passed in
function add3(n1, n2, n3) {
    return n1 + n2 + n3;
}

// but you do not want to do that so
// make a function that takes in n parameters
function addAll(numbers=[]) {
    var total = 0;
    for (var n of numbers) {
        total += n;
    }
    return total;
}
// you have to pass in the array for addAll() tho,,, so you can do.,,,
// ES6+
function addAll2(...numbers) {
    var total = 0;
    for (var n of numbers) {
        total += n;
    }
    return total;
}

console.log(`total addAll: ${addAll([1, 2, 3, 4, 5])}`);
console.log(`total addAll2: ${addAll2(1, 2, 3, 4, 5)}`);
console.log(`hello`, 'bitch');