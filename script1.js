var arr = [];
for (var i = 0; i < 5; i++) {
    var name = prompt('Введите имя');
    arr.push(name);
}
var userName = prompt('Введите имя пользователя');
for (var i = 0; i < arr.length; i++) {
    if (userName === arr[i]) {
        var loginSuccess = true;
    }
}
if (loginSuccess) {
    alert(userName + ', Вы успешно вошли');
} else {
    alert('Ошибка');
}
