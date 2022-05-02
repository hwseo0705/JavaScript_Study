var x = 10; // global variable

/*
    a variable declared outside the function is a global varialbe

    a variable declared inside the function is a local variable
    if the function finishes, the local variable is deleted
*/

function foo() {
    var y = 3; // local variable
    console.log(`y: ${y}`);
    var z = x + y;
}

// global variables are accessible anywhere in the code
console.log(`x: ${x}`);
// local varables cannot be used outside the certain area
// console.log(`y: ${y}`);

console.log(`------------------------------------------`);

var z = 'global z'; // global

function bar() {
    var z = 'local z'; // local
    // 'local z' is printed here even though there are 2 'z's
    // why? cuz it only used z in local and never used the global
    console.log(`inside the function: ${z}`);
}
// at this point, 'local z' is not in memory
// cuz bar() was never called
console.log(`outside the function: ${z}`);
bar();
// still global z because local z ends inside the function
// if you wanna use local, you gotta return it from local to global
console.log(`outside the function: ${z}`);