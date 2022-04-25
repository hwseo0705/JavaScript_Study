var width = +prompt(`한 변(1): `);
var height = +prompt(`한 변(2): `);
// var width = 3;
// var height = 7;
var star = '';

if (width < height) {
    var temp = width;
    width = height;
    height = temp;
}

for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
        star += '* ';
    }
    star += '\n';
}
alert(star);
// console.log(star);