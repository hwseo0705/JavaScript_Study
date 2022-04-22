var startHeight = +prompt(`몇 cm부터 : `);
var endHeight = +prompt(`몇 cm까지 : `);
var interval = +prompt(`몇 cm마다 : `);
// var startHeight = 155;
// var endHeight = 190;
// var interval = 5;
var nextHeight = startHeight;
var result = '';
while (nextHeight <= endHeight) {
    var weight = ((nextHeight - 100) * 0.9).toFixed(2);
    // console.log(`${nextHeight}cm ${weight.toFixed(2)}kg`);
    result += `${nextHeight}cm ${weight}kg\n`
    nextHeight += interval;
}
alert(result);