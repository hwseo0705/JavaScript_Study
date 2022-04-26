// Falsy
if (undefined) console.log('ok1');
if (null) console.log('ok2');
if (0) console.log('ok3');
if ('') console.log('ok4');
if (NaN) console.log('ok5');

console.log(`------------------------------------------`);

// Truthy
if (1) console.log('ok6');
if (-77.999) console.log('ok7');
if ('Hello') console.log('ok8');
if ('  ') console.log('ok9');
if ([1,2,3]) console.log('ok10');
if ([]) console.log('ok11');

console.log(`------------------------------------------`);

var num = 9;
if (num % 2) { // cuz it's 0 when it's even, and 0 is 'Falsy'
    console.log('Odd Number');
} else {
    console.log('Even Number');
}

console.log(`------------------------------------------`);

var apple = 10;
if (apple) {
    console.log(`There is(are) ${apple} apple(s).`);
} else {
    console.log(`No apple.`);
}

var result;
if (result) {
    console.log('HOLA!'); // does not print because it's undefined (falsy)
}

//var n = 99;
// while (n) {
//     //infinite cuz it's true
// }
