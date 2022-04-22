var inputNum = +prompt(`n의 값: `);
// var inputNum = 3;
var i = 1;
var power = 0;
var result = '';
while (i <= inputNum) {
    power = i * i; // i ** 2
    // console.log(`${i}의 제곱은 ${power}`);
    result += `${i}의 제곱은 ${power}\n`;
    i++;
}
alert(result);