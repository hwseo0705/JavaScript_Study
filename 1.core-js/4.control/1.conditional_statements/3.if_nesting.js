var userHeight = +prompt("Your Height: ");
if (userHeight >= 140) {
    var userAge = +prompt('Your Age: ');
    if (age >= 8) {
        alert('놀이기구에 탑승할 수 있습니다.');
    } else if (age >= 6) {
        alert('보호자 동반시 놀이기구에 탑승할 수 있습니다.')
    } else {
        alert('나이 제한 때문에 놀이기구에 텁승할 수 없습니다.')
    }
} else {
    alert('키 제한 때문에 놀이기구에 탑승할 수 없습니다.');
}
alert('오늘 하루 즐거운 시간되세요!');