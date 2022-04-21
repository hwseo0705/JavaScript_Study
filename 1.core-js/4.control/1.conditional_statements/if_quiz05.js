var inputNum1 = +prompt('3개의 정수를 입력하세요. 정수 1 : ');
var inputNum2 = +prompt('정수 2: ');
var inputNum3 = +prompt('정수 3: ');

var count = 0;
if (inputNum1 === inputNum2) {
    count++;
}
if (inputNum1 === inputNum3) {
    count++;
}
if (inputNum2 === inputNum3) {
    count++;
}
alert(`${count}개의 값이 같습니다.`)