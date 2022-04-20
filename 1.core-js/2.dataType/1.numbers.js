var decimal = 100; // number type (int but number type)

// typeof function: shows the type of the variable
console.log(typeof decimal);

var float = 3.14; // number type (float but number type)
console.log(typeof float);

// js는 모든 숫자 데이터를 실수값으로 처리
console.log(10 / 4);

var binary = 0b1001; // saves binary
console.log('binary: ' + binary); // but returns int

// NaN: 산술연산 불가능을 표현하는 값
console.log(10 / 'nope');
