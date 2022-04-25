for (var i = 0; i < 3; i++) { // loop 3 times
    for (var j = 0; j < 4; j++) { // loop 3 times
        for (var k = 0; k < 2; k++) { // loop twice
            console.log(`Hello! ${i} - ${j}`); // prints 24 times
        }
        console.log('This is printed 12 times');
    } // end inner for
    console.log('This one\'s printed 3 times');
    console.log(`------------------------------------------`);
} // end outer for

console.log(`------------------------------------------`);

var level = 2;
for (var level = 2; level <= 9; level++) {
    for (var line = 0; line < 10; line++) {
        console.log(`${level} x ${line} = ${level*line}`);
    } // end inner for
    console.log(`------------------------------------------`);
} // end outer for

console.log(`------------------------------------------`);