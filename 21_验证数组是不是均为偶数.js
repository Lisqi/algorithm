var arr = [6, 10, 12, 14, 88, 81, 100, 56];

// 遍历
for (var i = 0; i < arr.length; i++) {
    // 如果遍历到这项可以整除2，那就是偶数
    if (arr[i] % 2 == 0) {
        console.log(arr[i] + "是偶数");
    } else {
        console.log(arr[i] + "不是偶数")
    }
}