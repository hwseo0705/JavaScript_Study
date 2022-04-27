var foods = ['Chipotle', 'Chick-Fil-A', 'Panda Express', 'Subway', 'InNOut', 'Canes', `Chipotle`];

// indexOf(element) : find the index of an element
var idx = foods.indexOf('Subway');
console.log(`Index of Food: ${idx}`);

// the hard way is...
var index = 0;
for (var f of foods) {
    if (f === `InNOut`) {
        break;
    }
    index++;
}
console.log(`Found Index the Hard Way: ${index}`);

// get the last occurrence index
var lastIdx = 0;
console.log(`Last Index: ${foods.lastIndexOf('Chipotle')}`);

console.log(`------------------------------------------`);

// slice() : it's like substring (inclusive, exclusive)
var foodSlice1 = foods.slice(2, 5);
console.log(`foodSlice1: ${foodSlice1}`);

// end undefined (startIndex ~ )
var foodSlice2 = foods.slice(3);
console.log(`foodSlice2: ${foodSlice2}`);

// foods.slice() --> copy all
var foodSlice3 = foods.slice();
console.log(`foodSlice3: ${foodSlice3}`);

console.log(`------------------------------------------`);

var nums = [10, 20, 30, 40, 50];

// reverse(): reverse the array
var numsCopy = nums.slice();
var reversed = numsCopy.reverse();
console.log(`nums: ${nums}`);
console.log(`reversed: ${reversed}`);

console.log(`------------------------------------------`);

////////// caution //////////
// this is saying that numbers2 is going to have the
// same address as numbers, so if you make changes to numbers2,
// it will also change numbers
var numbers = [10, 20, 30];
var numbers2 = numbers;
numbers2.reverse();
console.log(`numbers: ${numbers}`);
console.log(`numbers2: ${numbers2}`);

console.log(`------------------------------------------`);

// concat() : concatenated copy of two arrays
var arr1 = [50, 70, 100];
var arr2 = [9, 5, 1, 10, 20];
var concatCopy = arr1.concat(arr2, arr1, arr1);
console.log(`arr1 + arr2 = ${concatCopy}`);

console.log(`------------------------------------------`);

// includes(element) : if array includes the element (t or f)
console.log(`Chipotle in foods? ${foods.includes('Chipotle')}`);
console.log(`Chicken in foods? ${foods.includes('Chicken')}`);

var result2 = foods.includes('Chick-Fil-A') ? ':-)' : ':-(';
console.log(result2);

if (foods.includes('Beef')) {
    console.log('YUM!!!!');
} else {
    console.log(`SAD!!!!`);
}

console.log(`------------------------------------------`);

// splice() : remove a part of an array
var pets = ['dog', 'cat', 'bird', 'deer'];

// only delete bird
// pets.splice(2, 1);

// delete cat and bird
// pets.splice(1, 2);

// delete dog and insert tiger there
// pets.splice(0, 1, 'tiger');
// console.log(`pets: ${pets}`);

// don't delete anything and insert in that index
// pets.splice(1, 0, 'squid');
// console.log(`pets: ${pets}`);

// add at the end
// pets.push('fish');
// console.log(`pets: ${pets}`);

// delete everything from index ~ end
pets.splice(2);
console.log(pets);
