// && --> AND operator
// if both statements are true, return true
var t = true, f = false;
console.log(`t && t: ${t && t}`);
console.log(`t && f: ${t && f}`);
console.log(`f && t: ${f && t}`);
console.log(`f && f: ${f && f}`);

console.log('---------------------------------------------------');

// || --> OR operator
// if at least one is true, return true
console.log(`t || t: ${t || t}`);
console.log(`t || f: ${t || f}`);
console.log(`f || t: ${f || t}`);
console.log(`f || f: ${f || f}`);

console.log('---------------------------------------------------');

// ! --> NOT operator
console.log(`!t: ${!t}`);
console.log(`!f: ${!f}`);

var money = 0;
if (!money) {
    console.log('I am broke');
} else {
    console.log(`I got $${money} in my bank account`);
}
