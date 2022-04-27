var student = 0;
while (student >80 || student < 1) {
    student = +prompt(`학생 수를 입력해주세요.\n1~80 사이로 입력해주세요.`);
}
var scoresList = [];
var mapScores = Array(11).fill('');

for (var i = 0; i < student; i++) {
    var score = +prompt(`15명의 점수를 입력해주세요.`)
    scoresList.push(score);
    var indexStar = parseInt(score / 10);
    mapScores[indexStar] += '*';
}

var alertMessage = `~~~~ 분포 그래프 ~~~~\n`;
var low = 0;
var high = 9;
for (var k = 0; k < 10; k++) {
    alertMessage += `${low} ~ ${high} :  ${mapScores[k]}\n`;
    low += 10;
    high += 10;
}
alertMessage += `      ${low} :  ${mapScores[k]}`;
alert(alertMessage);