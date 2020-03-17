for (var i = 1; i <= 6; i++) {
    // 每行的字符串
    var rowStr = '';

    // 追加空格
    rowStr += ' '.repeat(12 - 2 * i);

    // 追加左半部分
    for (var j = i; j >= 1; j--) {
        rowStr += j + ' ';
    }

    // 追加右半部分
    for (var j = 2; j <= i; j++) {
        rowStr += j + ' ';
    }

    console.log(rowStr);
}