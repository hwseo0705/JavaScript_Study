var inputNum = +prompt(`정숫값: `);
// var inputNum = 15;
var i = 1;
var result = '';
while (i <= inputNum) {
    if (i % 2 === 1) {
        result += i + ' ';
    }
    i++;
}
// console.log(result);
alert(result);