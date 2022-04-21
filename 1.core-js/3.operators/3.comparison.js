var a = 5;
var b = '5';
// '===' asks whether they have the same type & value
// '==' asks whether they have the same value
console.log(`a == b --> ${a == b}`);
console.log(`a != b --> ${a != b}`);
// var b = 6; --> a === b is still false (same type diff value)
// so in javascript, do not use two, use three
console.log(`a === b --> ${a === b}`);

/*
    ==, != operators compares whatever the value is (removes quotes) and see if
    they are the same, so even if the type is different, it will still return true
*/

console.log('--------------------------------------------------------');

//  making it all === will say false
console.log('0' == '');
console.log(0 == '');
console.log('0' == 0);
console.log(false == 'false');
console.log(false == '0');

console.log('--------------------------------------------------------');

var z = 10;
console.log(`z > 5 = ${z > 5}`);
console.log(`z <= 10 = ${z <= 10}`);

console.log('--------------------------------------------------------');

// string compare
console.log(`'a' === 'A' = ${'a' === 'A'}`);
console.log(`'HelloWorld' === 'Hello World' = ${'HelloWorld' === 'Hello World'}`);
// lowercase a is bigger than the uppercase A (ASCII)
// A: 65, a: 97, 가: 44032
// 가 < 바 --> true
console.log(`'a' < 'A' = ${'a' < 'A'}`);
console.log(`'ace' < 'ade' = ${'ace' < 'ade'}`);
console.log(`'pineapple' < 'zebra' = ${'pineapple' < 'zebra'}`);
console.log(`'pineapple' < 'Zebra' = ${'pineapple' < 'Zebra'}`);

/*

    English Upper < English Lower < Korean

    A < Z < a < z < 가 < 하

*/