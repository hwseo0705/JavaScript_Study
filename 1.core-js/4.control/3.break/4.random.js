// random value
// Math.random(): 0 ~ 1 ---> inclusive ~ exclusive

var rand = Math.random();
console.log(`random number: ${rand}`);

if (rand > 0.66) {
    console.log(`Dinner is Pork Belly`);
} else if (rand > 0.33) {
    console.log('Dinner is Salad');
} else {
    console.log(`Dinner is Water`);
}

console.log(`------------------------------------------`);

// rounding up/down 내림, 올림, 반올림
console.log(`Math.floor: ${Math.floor(3.789)}`);
console.log(`Math.ceil: ${Math.ceil(5.289)}`);
console.log(`Math.round: ${Math.round(7.8)}`);

console.log(`------------------------------------------`);

/*
    Generate random number between 1 and 10
    Math.random()                           --> 0.0 <= ~ < 1.0
    Math.random() * 10                      --> 0.0 <= ~ < 10.0
    Math.floor(Math.random() * 10)          --> 0 <= ~ < 10
    Math.floor(Math.random() * 10) + 1      --> 1 <= ~ < 11
*/

var ri = Math.floor(Math.random() * 10) + 1;
console.log(`random number: ${ri}`);

// random number between 117 ~ 163
var i = Math.floor(Math.random() * 47 + 117);

/*
    # random number range equation
    --> x <= random# < y
    --> Math.floor(Math.random() * (y - x + 1) + x)     ////////////////////////// equation ///////////////////////
*/