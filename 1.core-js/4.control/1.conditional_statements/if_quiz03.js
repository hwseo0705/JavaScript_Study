var inputNum1 = +prompt('3개의 정수를 입력하세요. 정수 1 : ');
var inputNum2 = +prompt('정수 2: ');
var inputNum3 = +prompt('정수 3: ');

if (inputNum1 < inputNum2 && inputNum1 < inputNum3) {
        alert(`최솟값은 ${inputNum1}입니다.`);
} else if (inputNum2 < inputNum1 && inputNum2 < inputNum3) {
        alert(`최솟값은 ${inputNum2}입니다.`);
} else if (inputNum3 < inputNum1 && inputNum3 < inputNum2) {
        alert(`최솟값은 ${inputNum3}입니다.`);
}

// alert(`최솟값은 ${Math.min(inputNum1, inputNum2, inputNum3)}입니다.`);