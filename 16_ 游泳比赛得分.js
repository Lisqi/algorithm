var arr = [39, 45, 42, 44, 51, 48];

// 一上来认为最高分的数是39分，
var max = arr[0];
// 一上来认为最低的分数是39分
var min = arr[0];

// 总和
var sum = arr[0];

// 从下表为1的项开始遍历数组，寻找最大值，寻找最小值，并且求和
for (var i = 1; i < arr.length; i++) {
    // 如果你遍历到的这项，比当前的最大值还大，那么这项就是最大值
    if (arr[i] > max) {
        max = arr[i];
    } else if (arr[i] < min) {
        // 如果你便利的这项，比当前的最小值还小，那么这项就是最小值
        min = arr[i];
    }
    // 统计总和
    sum += arr[i];
}
// 平均分
var average = (sum - max - min) / (arr.length - 2);

console.log(average);