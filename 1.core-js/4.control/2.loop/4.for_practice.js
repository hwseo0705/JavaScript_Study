// 구구단 n단 출력
var level = 5;
for (var num = 0; num < 9; num++) {
    console.log(`${level} x ${num} = ${level * num}`);
}

console.log(`------------------------------------------`);

// print odd numbers between 1 ~ 20
for (var n = 0; n < 20; n+=2) {
    console.log(`Odd Num: ${n}`);
}

console.log(`------------------------------------------`);

// print odd numbers between 1 ~ 20
for (var n = 0; n < 20; n++) {
    if (n % 2 === 1) {
        console.log(`Odd Num: ${n}`);
    }
}

console.log(`------------------------------------------`);

// print multiples of 3 between 18 ~ 32
for (var k = 18; k <=32; k++) {
    if (k % 3 === 0) {
        console.log(k);
    }
}

console.log(`------------------------------------------`);

// count multiples of 12 between 1 ~ 4000
var count = 0;
for (var z = 0; z < 4000; z++) {
    if (z % 12 === 0) {
        count++;
    }
    z++; 
}
console.log(`Count: ${count}`);
