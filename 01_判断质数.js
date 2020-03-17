var a = 45887;

// 从2开始寻找，寻找a的约数，如果这数是质数，那么遇不见任何一个数字能够整除它
// 如果遇见了，就bresk,种植验证，因为它已经不满足质数的条件了。
for (var i = 2; i <= a - 1; i++) {
    if (a % i == 0) {
        break;
    }
}

if (i == a) {
    console.log(`${a}是质数`);
} else {
    console.log(`${a}不是质数`);
}