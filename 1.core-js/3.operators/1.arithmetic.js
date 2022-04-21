// division and modulus
console.log(`27 / 5 = ${27 / 5}`); // should be 5 but JS says 5.4, 정수개념 x
console.log(`27 % 5 = ${27 % 7}`); // this will give 2
console.log(`5 % 4 = ${5 % 4}`); // 1
console.log(`4 % 10 = ${4 % 10}`); // 4
console.log(`7 % 8 = ${7 % 8}`); // 7
console.log(`0 % 100 = ${0 % 100}`); // 0
console.log(`200 % 0 = ${200 % 0}`); // NaN
console.log(`10 / 0 = ${10 / 0}`); // Infinity

var num1 = 8,
    num2 = 5;
console.log(`num1 % num2 = ${num1 % num2}`); // 3

// 거듭제곱연산자(**) - ES6+
console.log(`num2 ** 2 = ${num2 ** 2}`); // 25

console.log('-------------------------------------------------------');

//증감연산자 (++, --) : 단항연산자
// the location of ++ does not matter when used alone
var x = 3;
++x;
console.log(`++x: ${x}`);
x++;
console.log(`x++: ${x}`);

// 전위 연산 (prefix), 후위 연산 (postfix)
var a = 10;
// when you do a++, a is 11 and b is 10 because b was assigned and a was increased after
// but if you do ++a, a is 11 and b is also 11 because b was assigned after a was increased
var b = a++;
console.log(`a: ${a}, b: ${b}`);

var c = 5;
var d = ++c * 2;
console.log(`c: ${c}, d: ${d}`); // 5, 10 if it's c++

// what is the result of the following?
var e = --b + c++ * d; // b = 9, c = 7, d = 12, e = 6 * 12 + 9 = 81
console.log(`e = ${e}`);
// console.log(a, b, c, d, e);

