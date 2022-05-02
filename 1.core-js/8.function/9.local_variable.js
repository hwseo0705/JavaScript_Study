// parameter x is a local scope
var y = 'global y';
function outer(x) {
    var z = 'outer local z';
    console.log(`x: ${x}`);

    function inner() {
        var x = 'inner local x';
        var z = 'inner local z';
        console.log(`x: ${x}`);
        console.log(`y: ${y}`);
        console.log(`z: ${z}`);
    }
    inner();
}

var x = 'global x';
outer('outer param x');

console.log(`------------------------------------------`);

// global variables have problems because it can be modified easily anywhere

// 사이트 전체 정책적 할인율
var saleRate = 0.1; // global

// 400+ lines of code

// 임시 이벤트로 할인율을 1시간동안만 20퍼로 상승
// var saleRate = 0.2; // temp but changed the total saleRate

// it's better to do this than the above var
// making 'saleRate' local varables will not alter each other's
function eventSale() {
    var saleRate = 0.2;
}

function vipSalePolicy() {
    var saleRate = 0.3;
}

// by putting codes in the immediate execution function, you can save yourself from having to use
// global variables. can make them local by putting them in the function.