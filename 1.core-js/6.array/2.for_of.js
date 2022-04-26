var scoreList = [97, 88, 100, 92, 55, 23, 100];
var total = 0;

// get total
// can't use index at all here
for (var n of scorelist) {
    total += n;
}

// for (var i in scoreList) {
//     total += scoreList[i];
// }

// get average
var average = total / scoreList.length;

// rounding up average to two decimals (100), three (1000), ... etc.
// but I guess we are gonna learn to do the interesting way (smart way?)
var digit = 2;
var roundAvg = Math.round(average * 10 ** digit) / 10 ** digit;
console.log(`total: ${total}, average: ${average.toFixed(2)}`);

// toFixed(decimal#) to specify decimals
// console.log(`total: ${total}, average: ${average.toFixed(2)}`);

