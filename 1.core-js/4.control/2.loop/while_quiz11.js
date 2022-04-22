var inputNum = +prompt(`몇 개의 *를 출력할까요? `);
// var inputNum = 12;
var i = 1;
var result = '';
while (i <= inputNum) {
    result += '*';
    if (i % 5 === 0) {
        result += '\n';
    }
    i++;
}
// console.log(result);
alert(result);