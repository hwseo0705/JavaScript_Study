var inputNum = +prompt(`양의 정수: `);

if (inputNum > 0) {
    var count = 1;
    var result = '';
    while (count <= inputNum) {
        if (count % 2 === 1) result += '+';
        else result += '-';
        count++;
    }
}
alert(result);