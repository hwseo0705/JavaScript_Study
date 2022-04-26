// prompt user: pick level
var inputMessage = '';
inputMessage += `~~~~~~~ 재미있는 사칙연산 게임 ~~~~~~~\n`;
inputMessage += `[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~]\n`;
inputMessage += `============================================\n`;
inputMessage += `# 난이도를 설정합니다 ~~~ !!\n`;
inputMessage += `[1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20)]`;
var input = +prompt(inputMessage);

//assign loopCount and level according to user input
var low = 1;
var high = 0;
switch (input) {
    case 1:
        high = 100;
        break;
    case 2:
        high = 50;
        break;
    case 3:
        high = 20;
        break;
    default:
        alert(`없는 값입니다. 자동으로 상난이도로 맞추어집니다.`);
        high = 100;
}

var questionNumber = 1;
var right = 0;
var wrong = 0;
var consecutiveWrong = 0;
while (true) {

    // generate random questions and find answer
    var firstRand = Math.floor(Math.random() * high + 1);
    var secondRand = Math.floor(Math.random() * high + 1);
    var math = Math.floor(Math.random() * 3);
    var sign = '';
    var answer = 0;
    var subtractToZero = false;
    switch (math) {
        case 0:
            answer = firstRand + secondRand;
            sign = '+';
            break;
        case 1:
            if (firstRand < secondRand) {
                var temp = firstRand;
                firstRand = secondRand;
                secondRand = temp;
            }
            answer = firstRand - secondRand;
            subtractToZero = true;
            sign = '-';
            break;
        case 2:
            answer = firstRand * secondRand;
            sign = '*';
            break;
    }

    // prompt the user to guess
    var guess = +prompt(`Q${questionNumber}. ${firstRand} ${sign} ${secondRand} = ??`);
    questionNumber++;
    // if the user inputs 0, exit game
    if (guess === 0 && subtractToZero === false) {
        break;
    }

    // if the guess is correct
    if (guess === answer) {
        consecutiveWrong = 0;
        right++;
        alert(`정답입니다!`);
        continue;
    }

    // if it's wrong
    wrong++;
    consecutiveWrong++;
    if (consecutiveWrong === 3) {
        alert(`연속 세번 틀려서 게임 오버!`);
        break;
    }
    alert('틀렸어요~');
}
var guessMessage = '';
guessMessage += `게임을 종료합니다!\n`;
guessMessage += `==========================\n`;
guessMessage += `정답횟수: ${right}회, 틀린횟수: ${wrong}회`;
alert(guessMessage);