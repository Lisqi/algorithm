var arr = ['A', '帅哥', '美女', 'A', '帅哥', '大哥', '大姐', 'A', '哈哈哈'];

// 遍历数组，看看是不是A
for (var i = 0; i < arr.length; i++) {
    // 如果这项是A，那么就删除这项
    if (arr[i] == 'A') {
        arr.splice(i, 1);
    }
}

console.log(arr);