var startNum = +prompt(`첫번째 숫자를 입력하세요`);
var endNum = +prompt(`두번째 숫자를 입력하세요`);

if (startNum > endNum) {
    var temp = startNum;
    startNum = endNum;
    endNum = temp;
}

var total = 0;
var counter = startNum;
while (counter <= endNum) {
    total += counter;
    counter++;
}
alert(`${startNum} ~ ${endNum}까지의 누적합: ${total}`);