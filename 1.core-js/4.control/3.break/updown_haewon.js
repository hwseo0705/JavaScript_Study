// might be able to make it better
// wasn't able to focus

// prompt user: pick level
var inputMessage = '';
inputMessage += `~~~~~~~ 재미있는 UP&DOWN 게임 ~~~~~~~\n`;
inputMessage += `# 난이도를 설정하세요 ~~~ !!\n`;
inputMessage += `[1. 상 (기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번)]`;
var input = +prompt(inputMessage);

//  assign loopCount and level according to user input
var loopCount = 0;
var level = '';
switch (input) {
    case 1:
        loopCount = 3;
        level = '상';
        break;
    case 2:
        loopCount = 6;
        level = '중';
        break;
    case 3:
        loopCount = 10;
        level = '하';
        break;
    default:
        alert(`없는 값입니다. 자동으로 상난이도로 맞추어집니다.`);
        loopCount = 3;
        level = '상';
}

// initial guessMessage
var guessMessage = '';
guessMessage += `${level}난이도입니다. ${loopCount}번안에 맞춰주세요!!\n`;
guessMessage += `\t [ 1 ~ 50 사이의 무작위 숫자를 ${loopCount}번 안에 맞춰보세요!! ]\n`;
// low & high
var low = 1;
var high = 100;
// count how many times the user guessed
var guessCount = 0;
// random generated answer
var answer = Math.floor(Math.random() * high + low);
// intial prompt
var guess = +prompt(guessMessage + `# [${low} ~ ${high}]`);
guessCount++;
while (loopCount > 0) {
    // if the guess is correct, break
    if (guess === answer) {
        break;
    }
    // out of range alert
    if (guess <= low || guess >= high) {
        guess = +prompt(`범위 안의 값을 입력하세요!!` + `# [${low} ~ ${high}]`);
        continue;
    }
    guessCount++;
    guessMessage = '';
    // set new low and high according to input
    if (guess < answer) {
        low = guess;
        guessMessage += `UP!!!`;
    } else {
        high = guess;
        guessMessage += `DOWN!!`;
    }
    loopCount--;
    guessMessage += `\n${loopCount}번의 기회가 남았습니다.`;
    if (loopCount != 0) {
        guess = +prompt(guessMessage + `# [${low} ~ ${high}]`);
    }

}
if (loopCount === 0) {
    alert(guessMessage + `\n기회를 모두 소진했습니다. GAME OVER!!\n정답은 ${answer}입니다.`);
} else {
    alert(`정답입니다! ${guessCount}번 만에 맞추셨습니다!`);
}