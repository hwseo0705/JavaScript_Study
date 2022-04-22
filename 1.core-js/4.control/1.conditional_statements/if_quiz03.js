var inputNum1 = +prompt('3개의 정수를 입력하세요. 정수 1 : ');
var inputNum2 = +prompt('정수 2: ');
var inputNum3 = +prompt('정수 3: ');

var min = inputNum1; //최소값 저장 변수
if (inputNum2 < min) {
        min = inputNum2;
} 
if (inputNum3 < min) {
        min = inputNum3;
}
alert(`최소값은 ${min}입니다.`);

// alert(`최솟값은 ${Math.min(inputNum1, inputNum2, inputNum3)}입니다.`);