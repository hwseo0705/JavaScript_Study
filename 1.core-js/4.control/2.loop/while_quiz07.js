// var inputNum = +prompt(`양의 정수를 입력해주세요: `);
// var num = 1;
// var result = '';
// while (inputNum > 0) {
//     if (num === 10) {
//         num = 0;
//     }
//     result += num;
//     num++;
//     inputNum--;
// }
// alert(result);

var inputNum = +prompt(`양의 정수를 입력해주세요: `);
var result = '';
var i = 1;
while (i <= inputNum) {
    result += i % 10;
    i++;
}
alert(result);