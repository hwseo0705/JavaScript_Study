// var inputToString = prompt(`양의 정수: `);
// var len = inputToString.length;
// alert(`${inputToString}은(는) ${len}자리입니다.`);

var inputNum = +prompt('양의 정수: ');
if (inputNum > 0) {
    var targetNum = inputNum;
    var count = 0;
    while (targetNum != 0) {
        targetNum = parseInt(targetNum / 10);
        count ++;
    }
} else {
    alert(`양의 정수만 입력해주세요.`);
}
alert(`${inputNum}은(는) ${count}자리입니다.`);
