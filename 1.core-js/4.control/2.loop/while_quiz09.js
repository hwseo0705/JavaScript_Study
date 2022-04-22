var inputNum = +prompt(`정숫값: `);
// var inputNum = 15;
var i = 1;
var result = '';
while (i <= 15) {
    if (i % 2 === 1) {
        result += i + ' ';
    }
    i++;
}
// console.log(result);
alert(result);