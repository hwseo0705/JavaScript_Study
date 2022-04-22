var inputNum1 = +prompt('2개의 정수를 입력하세요. 정수 1 : ');
var inputNum2 = +prompt('정수 2: ');

var difference = inputNum1 - inputNum2;
alert(`두 값의 차이는 ${Math.abs(difference)}입니다.`);

// i could do
// if (inputNum1 < inputNum2) difference = -difference;
// var difference = a > b ? a - b : b - a;
// and then alert, but I like Math.abs