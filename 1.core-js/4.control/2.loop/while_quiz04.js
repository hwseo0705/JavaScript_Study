var inputNum = +prompt(`양의 정수: `);

var count = 1;
var result = '';
if (inputNum > 0) {
    while (count <= inputNum) {
        if (count % 2 === 1) {
            result += '+';
        } else {
            result += '-';
        }
        count++;
    }
}
alert(`${result}`);