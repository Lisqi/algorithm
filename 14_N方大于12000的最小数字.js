var n = 0;
while (true) {
    // 让n加1
    n++;

    // 检查如果满足条件，就终止循环
    if (n * n > 12000) {
        break;
    }
}
console.log(n, n * n);