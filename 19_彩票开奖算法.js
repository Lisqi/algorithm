// 结果数组
var result_arr = [];

// 循环，如果数组长度小于6，就一直循环
while (result_arr.length < 6) {
    // 从1到33随机一个数字
    var n = parseInt(Math.random() * 33 + 1);
    // 如果这个数字不在结果数组中
    if (!result_arr.includes(n)) {
        // 推进去
        result_arr.push(n);
    }
}

console.log(result_arr);