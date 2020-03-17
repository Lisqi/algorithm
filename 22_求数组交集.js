var arr1 = [1, 3, 8, 10, 12];
var arr2 = [4, 2, 10, 1, 3, 9, 17, 3];
// 准备一个空白数组，交集数组
var result_arr = [];
// 遍历
for (var i = 0; i < arr1.length; i++) {
    // 如果数组1的项存在数组2中
    if (arr2.includes(arr1[i])) {
        // 把数组1中的该项推入交集数组中
        result_arr.push(arr1[i]);
    }
}

console.log(result_arr);