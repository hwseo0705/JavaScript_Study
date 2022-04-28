// scores of 4 subjects of 3 students (kor, eng, math, sci)
var scoreList = [
    [88, 76, 92, 98],
    [65, 70, 58, 99],
    [100, 92, 100, 100]
];


// store the avg of each students
var avgList = [];
var mathSum = 0;

// each student's avg and the avg of all students
for (var stuScores of scoreList) {
    mathSum += stuScores[2];
    var eachTotal = 0;
    for (var score of stuScores) {
        eachTotal += score;
    }
    // individual avg
    var eachAvg = eachTotal / stuScores.length;
    avgList.push(eachAvg);
}

// avg of each students, and get total avg
var stuAvgSum = 0;
for (let i = 0; i < avgList.length; i++) {
    stuAvgSum += avgList[i];
    console.log(`${i + 1}번 학생 평균: ${avgList[i]}점`);
}
var classAvg = stuAvgSum / scoreList.length;
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`Our Class Average: ${classAvg}!`);

// get the avg math score
mathSum /= scoreList.length;
console.log(`Class Math Average: ${mathSum.toFixed(2)}!`)

