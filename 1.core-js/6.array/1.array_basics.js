// create an array
// array names r usually in plurual (-s), -List
var fruitsList = ['Apple', 'Grape', 'Orange', 'Peach', 'Grapefruit'];
console.log(`Array Length: ${fruitsList.length}개`);

// elements(요소) in an array: 저장된 데이터 하나하나
// 배열의 요소를 참조: 배열에서 데이터를 꺼내쓰겠다
console.log(fruitsList[2]);
console.log(`${fruitsList[4]} is so delicious~~`);

var favorite = fruitsList[1];
console.log(`My favorite fruit is ${favorite}`);

console.log(`------------------------------------------`);

// change an element in an array
fruitsList[3] = 'Pineapple';
console.log(fruitsList);

console.log(`------------------------------------------`);

// loop over all elements in an array
for(var i in fruitsList) {
    console.log(`${fruitsList[i]} is SO GOOD!`);
}