/*
    Q4)
    n개의 정수와 탐색할 정수를 전달받아 
    탐색할 정수가 n개 중에 있다면 
    몇번째에 있는지 반환하고
    없다면 -1을 반환하는 함수 search()를
    작성하고 아래 그림과 같이 출력하세요.
*/

function search(numbers, targetNum) {
    return numbers.lastIndexOf(targetNum) + 1;
}

var numbers = [];
var i = 0;
while (true) {
    var inputMsg = prompt(`vx[${i++}]`);
    if (inputMsg === '그만') break;
    numbers.push(+inputMsg);
}
var targetNum = +prompt(`찾을 값: `);

var result = search(numbers, targetNum);

if (result === -1) {
    alert(`탐색에 실패했습니다.`);
} else {
    alert(`${targetNum}은(는) ${result}번째에 있습니다.`);
}