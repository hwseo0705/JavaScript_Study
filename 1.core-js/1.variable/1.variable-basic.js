// I want to save the data that's gonna be used in the program

// 1. declare the variable (create)
var result;

// 2. initialize the variable (save)
result = 10 + 20; // --> assignment

// print result
console.log("initial assignment: " + result);

// 3. change the value of the variable
result = 50;
console.log("assign new result: " + result);

// 4. save the value in the variable (변수에 변수값을 지정)
result *= 2;
console.log("result * 2: " + result);

// yeah, it only changed the value for the print, not the actual value
console.log("result + 10: " + (result + 10));
console.log(result);

// can declare and initialize variables at once
var number = 70;

// 변수끼리 연산
console.log("result - number: " + (result - number));

number = result - 20;
console.log(numbeer);

// when declaring string(문자열), use '' or ""
var amigo_name = 'Hekwom';
