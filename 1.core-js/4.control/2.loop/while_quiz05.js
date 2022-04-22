var inputToString = prompt(`양의 정수: `);
var inputNum = +inputToString;
while (+inputNum <= 0) {
    alert(`양의 정수만 입력해주세요.`);
    inputToString = prompt(`양의 정수: `);
    inputNum = +inputToString;
    if (+inputNum > 0) {
        break;
    }
}

var index = inputToString.length - 1;
var result = '';
while (index >=0 ) {
    result += inputToString.charAt(index);
    index--;
}
alert(`${inputNum}을(를) 거꾸로 읽으면 ${result}입니다.`);