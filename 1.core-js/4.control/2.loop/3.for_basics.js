// when you know exactly how many times it's gonna loop, it is better to use for

for (var i = 0; i < 5; i++) {
    console.log("Hello");
}

console.log(`------------------------------------------`);

for (var j = 5; j >= 0; j--) {
    console.log(`${j}!!`);
}

console.log(`------------------------------------------`);

// 1 ~ 10 까지의 총합
var total = 0; //총합을 저장할 변수
for (var k = 1; k <= 10; k++) {
    total += k;    
}
console.log(`총합: ${total}`);
