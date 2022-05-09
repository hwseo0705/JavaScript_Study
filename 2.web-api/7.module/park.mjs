// park's file
const x = 'Park'; // 전역 변수

function hello() {
    console.log('Bye Park~');
}

// 전역변수, 함수를 외부로 내보내기
export { x, hello };