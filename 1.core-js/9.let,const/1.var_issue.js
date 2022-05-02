// 1. Allowing the multi declaration of the variable
var x = 10;
var x = 100;
console.log(x);

// 2. Block level scope is not supported
var y = 'Hello';
if (true) {
    var y = 'Bye'; // global not local
}
console.log(y);

for (var i = 0; i < 3; i++) {
    // this 'i' still exists after the for loop
}
console.log(`i: ${i}`);

// 3. Variable 호이스팅 hoisting(?)
// not declaring allowed, or declaring later is allowed
f = 100;
console.log(f);

var f;