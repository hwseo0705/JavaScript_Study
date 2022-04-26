// if money > 5000 won then 'kimchi', else 'ramen'
var money = 5000;

/* // same code
var food; 
if (money >= 5000) {
    food = 'kimchi';
} else {
    food = 'ramen';
}
*/

// var food = money >= 5000 ? 'kimchi' : 'ramen';

// >= 5000 'kimchi', >= 3000 'ramen', else 'starve';
var food = money >= 5000 ? 'kimchi' : money >= 3000 ? 'ramen' : 'starve';

// same code
var food; 
if (money >= 5000) {
    food = 'kimchi';
} else if (money >= 3000) {
    food = 'ramen';
} else {
    food = 'starve';
}
