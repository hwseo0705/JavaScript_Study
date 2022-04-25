for (var i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
console.log(`end loop`);

console.log(`------------------------------------------`);

for (var j = 0; j < 3; j++) {
    // if (j === 2) break;
    for (var k = 0; k < 2; k++) {
        if (j === k) {
            break;
        }
        console.log(`${j}, ${k}`)
    }
}

console.log(`------------------------------------------`);

// difference between ++m and m++
var m = 0;
while (++m < 5) {
    console.log(m);
    // if (m % 3 === 0) break;
}
console.log(`m after loop: ${m}`);

m = 0;
while (m++ < 5) {
    console.log(m);
    // if (m % 3 === 0) break;
}
console.log(`m after loop: ${m}`);