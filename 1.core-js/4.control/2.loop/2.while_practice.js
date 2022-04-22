// 구구단 n단 출력
var level = 5;
var num = 1;
while (num <= 9) {
    console.log(`${level} x ${num} = ${level * num}`);
    num++;
}

console.log(`------------------------------------------`);

// print odd numbers between 1 ~ 20
var n = 1;
while (n <= 20) {
    console.log(`Odd Num: ${n}`);
    n += 2;
}

console.log(`------------------------------------------`);

// print odd numbers between 1 ~ 20
var n = 1;
while (n <= 20) {
    if (n % 2 === 1) {
        console.log(`Odd Num: ${n}`);
    }
    n++;
}

console.log(`------------------------------------------`);

// print multiples of 3 between 18 ~ 32
var k = 18;
while (k <= 32) {
    if (k % 3 === 0) {
        console.log(k);
    }
    k++;
}

console.log(`------------------------------------------`);

// count multiples of 12 between 1 ~ 4000
var count = 0;
var z = 1;
while (z <= 4000) {
    if (z % 12 === 0) {
        count++;
    }
    z++;
}
console.log(`Count: ${count}`);
