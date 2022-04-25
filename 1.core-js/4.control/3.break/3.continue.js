for (var i = 1; i <= 10; i++) {
    if (i === 5) continue; // skip
    // if (i % 2 === 0) continue; // this will only print even nums
    console.log(i);
}

console.log(`------------------------------------------`);

while (true) {
    var n = +prompt(`Enter a number!`);
    // if n is 0, break out of while loop
    if (n === 0) break;
    // if n is 1, jump to next loop without printing the following
    else if (n === 1) continue;
    alert(`LMAO~~~~`);
}
alert(`DONE!`);