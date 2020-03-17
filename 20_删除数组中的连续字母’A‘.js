var arr = ['A', 'A', '帅哥', '美女', 'A', 'A', 'A', 'A', '帅哥', '考拉', 'A', '么么哒', '萌萌哒'];

// 遍历数组，看看是不是A
for (var i = 0; i < arr.length; i++) {
    // 如果这项是A，那么就删除这项
    if (arr[i] == 'A') {
        arr.splice(i, 1);
        // 减个1，然后循环语句加个1，就抵消了，相当于停一步
        i--;
    }
}

console.log(arr);