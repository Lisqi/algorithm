// 首相让用户输入n
// 引入内置模块，并且存为readline变量，require表示引入。
var readline = require('readline');

// 创建一个读取接口，这段代码来自nodejs官网手册
// https://nodejs.org/api/readline.html
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('请输入精度n', function (n) {
    var now = 1;
    var sum = 0;

    for (var i = 1; i <= n; i++) {
        now *= i / (2 * i + 1);
        sum += now;
    }

    console.log((sum + 1) * 2);
});