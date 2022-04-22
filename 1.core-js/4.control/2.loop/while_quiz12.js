// var inputNum = +prompt(`정숫값: `);
// var i = 1;
// var result = '';
// var totalCount = 0;
// while (i <= inputNum) {
//     var count = 2;
//     var isPrime = true;
//     while (count < i) {
//         if (i % count === 0) {
//             isPrime = false;
//             break;
//         }
//         count++;
//     }
//     if (isPrime === true) {
//         result += i + '\n'
//         totalCount++;
//     }
//     i++;
// }
// result += `Prime Number은 ${totalCount}개입니다.`
// alert(result);

var inputNum = +prompt(`정숫값: `);
// var inputNum = 12;
var i = 1;
var result = '';
var totalCount = 0;
while (i <= inputNum) {
    if (inputNum % i ===  0) {
        result += i + '\n';
        totalCount++;
    }
    i++;
}
result += `약수는 ${totalCount}개입니다.`
// console.log(result);
alert(result);
