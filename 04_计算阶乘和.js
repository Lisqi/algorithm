// 计算总和，总和只有1个，所以放到外面
var sum = 0;
for (var i = 1; i <= 9; i++) {
    // 阶乘，每个数字有自己的阶乘，所以要放到里面
    // 累乘器，用来计算当前i这个数字的阶乘
    var jiecheng = 1;
    //计算i的阶乘
    for (var j = 1; j <= i; j++) {
        // 累成进去，*=就是累乘。
        jiecheng *= j;
    }
    // 累加
    sum += jiecheng;

    // console.log(jiecheng);
}
console.log(sum);