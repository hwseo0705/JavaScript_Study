var inputNum = +prompt(`양의 정수: `);

if (inputNum > 0) {
    var count = 1;
    var result = '';
    while (count <= inputNum) {
        result += '*\n';
        count++;
    }
}
alert(result);
