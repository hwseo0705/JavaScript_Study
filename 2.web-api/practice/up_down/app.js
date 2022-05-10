// --------------------------- 전역변수, 함수 정의부 --------------------------- //

// 게임 진행에 필요한 데이터
// (actual answer, selected num, min, max)
const gameData = {
    secret: Math.floor(Math.random() * 100) + 1,
    answer: null,
    min: 1,
    max: 100
};

function makeIcons() {
    const $numbers = document.getElementById('numbers');

    // 가상의 태그 --> 성능 최적화
    const $virtual = document.createDocumentFragment();

    for (let i = 1; i <= 100; i++) {
        const $newDiv = document.createElement('div');
        $newDiv.textContent = i;
        $newDiv.classList.add('icon');

        $virtual.appendChild($newDiv);
    }
    $numbers.appendChild($virtual);
}

// remove everything below min
function removeMins(min, answer) {
    const $list = document.querySelectorAll('.icon');
    for (let i = min - 1; i < answer; i++) {
        $list[i].style.display = 'none';
    }
}

// remove everything above max
function removeMaxs(max, answer) {
    const $list = document.querySelectorAll('.icon');
    for (let i = answer - 1; i < max; i++) {
        $list[i].style.display = 'none';
    }
}

// --------------------------- 메인 코드 실행부분 --------------------------- //

// 즉시 실행 함수
(function () {

    // 100개의 아이콘 생성하여 배치
    makeIcons();

    // 아이콘 클릭 이벤트 부여
    const $numbers = document.getElementById('numbers');
    $numbers.addEventListener('click', e => {

        // 만약에 아이콘을 클릭하지 않았다면 나가!
        // console.log(e.target);
        if (!e.target.matches('#numbers > .icon')) return;

        // 사용자가 선택한 숫자가 무엇인가??
        // console.log(e.target.textContent);
        gameData.answer = +e.target.textContent;

        // 정답 검증
        const $up = document.getElementById('up');
        const $down = document.getElementById('down');

        // if the answer matches
        if (gameData.answer === gameData.secret) {

            const $congratulations = document.getElementById('finish');

            // remove up down animation
            $up.classList.remove('selected');
            $down.classList.remove('selected');

            // add class 'show' to show congratulations
            $congratulations.classList.add('show');
        } else if (gameData.answer < gameData.secret) { // if answer < actual

            // add 'up' animation, remove 'down' animation
            $up.classList.add('selected');
            $down.classList.remove('selected');

            // remove evereything below min, reset min
            removeMins(gameData.min, gameData.answer);
            gameData.min = gameData.answer + 1;

            // change the beginning number
            document.getElementById('begin').textContent = gameData.min;
        } else if (gameData.answer > gameData.secret) { // if answer > actual

            // add 'down' animation, remove 'up' animation
            $down.classList.add('selected');
            $up.classList.remove('selected');

            // remove everything above max, reset max
            removeMaxs(gameData.max, gameData.answer);
            gameData.max = gameData.answer - 1;

            // change the end number
            document.getElementById('end').textContent = gameData.max;
        }
    });

})();

/*
# 시나리오

- 사용자는 100개의 아이콘 중 한 개를 클릭한다.
- 시스템은 정답데이터(1~100사이의 랜덤정수)와 
  클릭한 아이콘의 숫자데이터를 비교한다.
- 시스템은 비교결과를 판단하여 UP인경우 DOWN인 경우 그리고 정답인 경우에 따른 효과를 렌더링한다.
- 사용자는 지속적으로 정답을 맞출 때 까지 위의 행위를 반복한다.

===============================

# 세부 시나리오

1. 100개의 아이콘에는 클릭 이벤트가 부여되어야 한다
2-1. UP인 경우
=> up아이콘의 애니메이션을 발동시킨다.
=> 해당 범위에 벗어난 아이콘을 제거한다.
=> h2태그의 최소값을 수정한다.

2-2. down인 경우
=> down아이콘의 애니메이션을 발동시킨다.
=> 해당 범위에 벗어난 아이콘을 제거한다.
=> h2태그의 최대값을 수정한다.

2-3. 정답인 경우
=> finish박스의 애니메이션을 발동시킨다.

===============================

# 필요한데이터

 1-100사의 랜덤정수(고정값),
 사용자가 클릭한 아이콘의 숫자,
 최소값을 저장할 변수, 최대값을 저장할 변수

*/