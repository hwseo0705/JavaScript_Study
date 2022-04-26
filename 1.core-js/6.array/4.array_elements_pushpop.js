var pets = ['dog', 'cat', 'bird'];
console.log(`pets init: ${pets} --- length: ${pets.length}`);

// push(... 'E'): add element to the end of the array
pets.push('tiger');
pets.push('squid', 'duck');
console.log(`pushed tiger: ${pets} --- length: ${pets.length}`);

// pop(): remove last element from the array
pets.pop();

// if you wanna remove everything in the array
// while (pets.length != 0) {
//     pets.pop();
// }

console.log(`popped: ${pets} --- length: ${pets.length}`);

// shift() : removes the first element of an array
pets.shift();
pets.shift();
console.log(`shifted: ${pets} --- length: ${pets.length}`);

// unshift(): add an element in the beginning
pets.unshift('pig');
console.log(`unshifted: ${pets} --- length: ${pets.length}`);