var arr = [3, 4, 34, 5, 123, 34, 45, 34];

// 遍历
for (var i = 0; i < arr.length; i++) {
    // 如果遍历到这项，除以2的余数是0，就输出
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}