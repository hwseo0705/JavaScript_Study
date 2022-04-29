/*
    Q7)
    1. n개의 정수를 전달받아 해당 정수들의
     총합과 평균 2개를 반환하는 함수 
     calcTotalAndAvg를 작성하고 결과를 출력하세요.

    - 호출 예시 : calcTotalAndAvg(10, 20, 30);

    - 출력 예시 : 전달된 숫자 총합: 60, 평균: 20
    
    
*/

function calcTotalAndAvg(numbers) {
    var total = 0;
    for (var n of numbers) {
        total += n;
    }
    alert(`전달된 숫자 총합: ${total}, 평균: ${total / numbers.length}`);
}

var numbers = [];
var howMany = 3;
for (var i = 0; i < howMany; i++) {
    numbers.push(+prompt(`vx[${i}]`));
}

calcTotalAndAvg(numbers);
