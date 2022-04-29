// parameters: values passed in the function
function add(n1, n2) {
    console.log('run function!!');
    return n1 + n2;
}

// call function
console.log(`10 + 20: ${add(10, 20)}`);

var num = add(20, 50);
console.log(num);

console.log(`------------------------------------------`);

// x ~ y total sum
// ex) 1 ~ 10 total sum: 55, 3 ~ 5 : 12

function calcRangeTotal(x, y) {
    var total = 0;
    for (var n = x; n <= y; n++) {  
        total += n;

    }
    return total;
}

// 인수(argument): values passed when calling
var r1 = calcRangeTotal(1, 10);
console.log(`r1: ${r1}`);

// if you don't pass in the argument, then undefined is passed in
// the result will be 0 because nothing happened in the function
// if you pass in too many, then JS uses the first two, but don't do it hehe
var r2 = calcRangeTotal();
console.log(`r2: ${r2}`);

console.log(`------------------------------------------`);

// A function without parameters
function hello() {
    console.log('hello');
}
hello();

console.log(`------------------------------------------`);

// Basic value of parameters
function sayHello(language='Korean') {

    // ES5
    // if no argument (language = false), so default if 'Korean'
    // language = language || 'Korean';
    // or you can do it in the parameter

    if (language === 'Korean') {
        console.log('안녕하세요!');
    } else if (language === 'English') {
        console.log('Hello~');
    } else if (language === 'Chinese') {
        console.log('Ni Hao');
    } else {
        console.log('I don\'t know');
    }
}

sayHello('Korean');
sayHello('English');
sayHello('Chinese');
sayHello('French');
sayHello();

// A function without parameters
function selectRandomPet() {
    var pets = [`dog`, `cat`, `bird`, `tiger`, `frog`];
    // Random integer from 0 to 4
    var rn = Math.floor(Math.random() * pets.length);
    return pets[rn];
}

console.log(`------------------------------------------`);

console.log(`selected animal: ${selectRandomPet()}`);