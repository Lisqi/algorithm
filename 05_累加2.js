var sum = 0;

for (var i = 0; i <= 9; i++) {
    // 凑i个2，转为数字
    sum += Number('2'.repeat(i));
}

console.log(sum);