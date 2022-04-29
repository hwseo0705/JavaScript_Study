/*
    Q5)
    n개의 정수와 탐색할 정수를 전달받아 
    탐색할 정수가 n개 중에 있다면 
    몇개 있는지 반환하고, 각각 몇번 인덱스에
    있는지 아래 그림과 같이 출력하세요.
    
*/

function search(numbers, targetNum) {
    var count = 0;
    var index = 0;
    var whereAt = '';
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === targetNum) {
            count++;
            whereAt += `vx[${i}] = ${targetNum}` + '\n';
        }
    }
    return [count, whereAt];

}

var numbers = [];
var i = 0;
while (true) {
    var inputMsg = prompt(`vx[${i++}]`);
    if (inputMsg === '그만') break;
    numbers.push(+inputMsg);
}
var targetNum = +prompt(`찾을 값: `);

// var numbers = [1, 7, 5, 7, 2, 4, 7];
// var targetNum = 7;

var result = search(numbers, targetNum);
var message = `${targetNum}은(는) ${result[0]}개 있습니다.\n`;
message += result[1];
// console.log(message);
alert(message);