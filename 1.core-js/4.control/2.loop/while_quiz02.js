var inputNum = +prompt(`양의 정수: `);

var count = 1;
var result = '';
if (inputNum > 0) {
    while (count <= inputNum) {
        result += '*';
        count++;
    }
}
alert(`${result}`);
