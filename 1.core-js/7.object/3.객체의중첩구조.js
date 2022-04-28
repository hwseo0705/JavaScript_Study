// 객체의 중첩구조
// ex) 웹사이트 게시판 데이터
var board = {
    totalCount: 2578, // total # of posts
    admin: 'abc1234', // admin id
    page: 258, // # of pages
    currPage: 3, // current page
    prev: false, // activate prev button?
    next: true, // activate next button?
    articleList: [
        {
            bno: 792, //글번호
            title: '제 3회 빅데이터 분석...',
            viewCount: 62836, 
            regDate: '2021.10.22',
            content: '어쩌고 저쩌고... ',
            writer: '관리자',
            recommend: 10
        }, 
        {
            bno: 791, //글번호
            title: '제출 서류 및 일정',
            viewCount: 114186,
            regDate: '2021.10.13',
            content: '어쩌고 저쩌고123... ',
            writer: '관리자',
            recommend: 21
        }, 
        {
            bno: 790, //글번호
            title: '고사장 추가 안내', 
            viewCount: 3691, 
            regDate: '2021.10.13',
            content: '어쩌고 저쩌고456... ', 
            writer: '관리자', 
            recommend: 2
        }
    ], //게시물 목록
};

console.log(`------------------------------------------`);

// 이전버튼 활성화 여부값
console.log(board.prev);

// 게시물 목록 안의 게시물 개수
console.log(board.articleList.length);

// 2번째 게시물의 전체정보
console.log(board.articleList[1]);

// 첫번째 게시물의 글제목
console.log(board.articleList[0].title);

// 모든 게시물의 조회수를 전부 출력
for (var article of board.articleList) {
    console.log(article.viewCount);
}