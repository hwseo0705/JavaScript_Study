var daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];
for (var n of daysOfWeek) {
    console.log(`${n}요일`);
}

console.log(`------------------------------------------`);

for (var i = 0; i < daysOfWeek.length; i++) {
    console.log(`${daysOfWeek[i]}요일`);
}

console.log(`------------------------------------------`);

for (var j in daysOfWeek) {
    console.log(`${daysOfWeek[j]}요일`);
}

console.log(`------------------------------------------`);

var foods = ['짜장면', '짬뽕', '볶음밥', '마라탕', '탕수육'];
var sentence = '';
for (var k = 0; k < foods.length; k++) {
    if (k === foods.length-1) {
        sentence += `${foods[k]}!!`;
    }
    sentence += `${foods[k]}과 `;
}
console.log(sentence);