var x = 10;
x += 5;
x -= 3;
x *= 2;
x /= 4;
x %= 4;
x **= 3;
console.log(`After a long equation, x = ${x}`);

var y = 5;
// this is basically y = +3, which just assigns 3 to y
y = +3;
console.log(`y =+ 3 --> ${y} `);

var z;
z += 4;
console.log(`z = ${z}`); // NaN cuz declared but not initialized


//문자열과 다른 타입의 덧셈: 결합연산
console.log(`'10' + 20 = ${'10' + 20}`);

// difference between num += 1; and num++;
// when u r incrementing by one, just do ++ cuz it's way faster
var num = 7;
num++;
num += 3;

/* 

Personal Note From Wesite Questions

"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = Infinity
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)

*/