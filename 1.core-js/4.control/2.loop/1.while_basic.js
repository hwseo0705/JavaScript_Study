// while loop needs a control statement, the start and the end
// do not make it infinite zzzz
var studentNum = 1;
while (studentNum <= 3) {
    console.log(`Hello, Student Number ${studentNum++}!`);
}
console.log(`While Loop Finished!`);

console.log(`------------------------------------------`);

// 5 ~ 0 count down
var count = 3;
while (count >= 0) {
    console.log(`${count--}!!`);
}
console.log(`Count Down Complete!`);

console.log(`------------------------------------------`);

// 1 ~ 10 total sum
var sum = 0;
var k = 1;
while (k <= 10) {
    sum += k++;
}
console.log(`Total Sum: ${sum}`);

console.log(`------------------------------------------`);

// print `메롱메롱` 30 times
var num = 0;
while (num++ < 30) {
    console.log(`메롱메롱 ${num}`);
}