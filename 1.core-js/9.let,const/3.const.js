// const (constant: 상수 - uniqueness and immutability(non-changable))
// let allows the modification but const forbids
const pi = 3.14159265;
// pi = 'bitch';
console.log(5 * 5 * pi);

for (let i = 0; i < 3; i++) {}

// const & objects (objects, arrays, functioins)
const person = {
    name: 'Haewon',
    age: 55
};

const dog = {
    name: 'Coco',
    age: 4
}

// this has to be prevented so use const for objects
// person = dog;
person.age = 25;
console.log(person);


// declaring objejcts as const doesn't prevent the individual values inside from changing
// it just prevents the object to be overwritten with another object
const numbers = [10, 20, 30];
numbers[1] = 999;