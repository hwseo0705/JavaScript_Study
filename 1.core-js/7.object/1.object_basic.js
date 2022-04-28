// object literal to create objects
// as long as the keys are the same, the order does not matter
var dog = {
    name: 'Milo',
    kind: `golden`,
    age: 3,
    injection: true,
    favorite: [`walks`, 'treats']
};

var cat = {
    name: 'Cong-E',
    age: 2,
    kind: `Black Russian`,
    injection: false,
    favorite: [`naps`, 'chewie', `cat tower`]
};

console.log(`type of dog: ${typeof dog}`); // object type

// values saved in the object
console.log(`dog's name: ${dog.name}`);
console.log(`dog's favorite: ${dog.favorite}`);
console.log(`cat's age: ${cat.age}`);
console.log(`cat's favorite: ${cat.favorite[0]}`);

// add value to favorite
dog.favorite.push(`wiggle tail`);
console.log(dog);
// remove value from favorite
cat.favorite.splice(0,1);
console.log(cat.favorite);

console.log(`------------------------------------------`);

// property 참조 2
console.log(`injection?? ${dog.injection}`);

// following is the same as the above code but
// if you want to use an array method, then you
// have to make the key a string!!
console.log(dog[`injection`]);

// same thing, as long as what goes in is a string it's fine
var  x =  'age';
console.log(cat[x]);

console.log(`------------------------------------------`);

// modify property value
dog.age = 5;
dog.favorite[2] = 'peepo';
console.log(dog);

console.log(`------------------------------------------`);

// adding a new property during runtime
cat.master = `Haewon`;
console.log(cat);

// removing a property during runtime
delete cat.master;
console.log(cat);

// empty property
var obj = {};