// take an input from the user until they enter
// a number bigger than 100
while (true) {
    var num = +prompt(`Enter a number!`);
    if ((num > 100)) break;
}
alert(`END WHILE`);

// the following can also be infinite, but while is better lol
// for (;;) {
//     var num = +prompt(`Enter a number!`);
//     if ((num > 100)) break;
// }