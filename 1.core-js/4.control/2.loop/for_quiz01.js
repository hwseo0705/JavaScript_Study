var height = +prompt(`Height of the square: `);
// var height = 3;
var star = '';
for (var i = 0; i < height; i++) {
    for (var j = 0; j < height; j++) {
        star += '*\t';
    }
    star += '\n';
}
alert(star);
// console.log(star);