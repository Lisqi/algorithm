var arr = [1, 2, 2, 2, 3, 4, 3, 1];

// 累加器
var sum = 0;

// 遍历
for (var i = 0; i < arr.length; i++) {
    // 往累加器中加
    sum += arr[i];
}

console.log(sum);