function pow() {
    var i = 0;
    var integer = prompt('Введите число');
    var pow = prompt('Введите степень');
    var result = 1;
    for (i = 0; i < Math.abs(pow); i++) {
        result = result * integer;
    }
    if (pow > 0) {
        alert(result);
    } else {
        alert(1.0 / result);
    }

}
pow();
