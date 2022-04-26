// OR 연산
console.log('hello' || 'world'); // T || T --> 'hello'
console.log(0 || 'world'); // F || T --> 'world'

console.log(`------------------------------------------`);

// AND 연산
console.log('hello' && 'world'); // T && T --> 'world'
console.log(null && 'bye'); // F && T --> null

console.log(`------------------------------------------`);

var x = 10;
/*
if (x > 0) {
    console.log('Hello~~');
}
*/
// same code
x > 0 && console.log('Hello~~');

