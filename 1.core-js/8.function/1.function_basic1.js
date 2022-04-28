/*

// the following linles are very repetetive, and if there are many lines,
// how would you change all of that individually? That's when the function comes in

var userName = 'Haewon';
console.log(`${userName}님 안녕하세요~ 반가워요!`);
console.log(`${userName}님 오늘도 즐거운 하루되세요!`);

// ~~~~~~~~~~ 1000 line ~~~~~~~~~~~

userName = `Julie`;
console.log(`${userName}님 안녕하세요~ 반가워요!`);
console.log(`${userName}님 오늘도 즐거운 하루되세요!`);

// ~~~~~~~~~~ 2000 line ~~~~~~~~~~~

userName = `Seo`;
console.log(`${userName}님 안녕하세요~ 반가워요!`);
console.log(`${userName}님 오늘도 즐거운 하루되세요!`);

*/

// define function
function callUserName(userName) {
    if (typeof userName === 'number') {
        console.log(`숫자로된 이름은 안됩니다~~`);
        return; // exit function
    }
    console.log(`${userName}님 안녕하세요~ 반가워요!`);
    console.log(`${userName}님 오늘도 즐거운 하루되세요!`)
    console.log(`------------------------------------------`);
}

// call function
callUserName('Haewon');
callUserName('Julie');
// ~~~~~~~~~~ 1000 line ~~~~~~~~~~~
callUserName('Seo');
callUserName(0);