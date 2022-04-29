/*
    n개의 정수를 전달받아 그 중 최소값을
    반환하는 함수 min을 정의하고 

    사용자에게 반복해서 숫자들을 입력받은 후
    min을 호출하여 최소값을 출력하세요.
    입력을 그만둘때는 '그만'이라고 입력하도록
    코드를 작성하세요
*/

function min2(n1, n2) {
    return (n1 < n2) ? n1 : n2;
}

while (true) {
    var first = prompt(`종료하려면 '그만'을 입력하세요\n첫번째 정수: `);
    if (first === '그만') {
        break;
    }
    var second = +prompt('두번째 정수: ');
    alert(`둘 중 작은 수: ${min2(+first, second)}`);
}