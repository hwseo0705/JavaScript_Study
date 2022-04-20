// identifier: 식별자 
// a unique name that identifies the data

// 1. it is case sensitive
var apple = 'apple';
apple = 'delicious apple';
var APPLE = 'nasty apple';
var Apple = 'Apple';

console.log('apple: ' + apple);
console.log('APPLE: ' + APPLE);

// 2. can't start with/only use numbers
// var 999 = 'nine nine nine'; will lead to an error
// var 7lucky = 'seven lucky'; --> error
var lucky7 = 'lucky seven';
var a99le = 'a99le';
console.log('lucky seven: ' + lucky7);

// 3. only ($, _) can be used
var hello$ = 'hello dollar';
var hello_underscore = 'hello underscore';
var $$$$$ = 'five dollars';

// 4. no space
// can't make things like var my name = name;
// snake case: our_vip_members_address (not recommended for js)
// camel case: ourVipMembersAddress (recommended for js)

// 5. keywords can't be used
// keyword: js functions

// names gotta be specific, clear, and relative
var a = 'haewon'; // --> do var memberFirstName
var b = 'seo'; // --> do var memberLastName
var c = '25'; // --> do var memberAge
var d = '19980705'; // --> do var memberBirthday, not userBirthday

// can always declare at once lol
var num1 = 10,
    num2 = 20;

/////////////////////// practice ///////////////////////////
// var name = 'John';
// var admin = name;
// console.log(admin);

var name, admin;
name = 'John';
admin = name;
console.log(admin);

var ourPlanetName = 'Earth';
var currentUserName = 'Haewon Seo';

const BIRTHDAY = '980705';
const age = BIRTHDAY;