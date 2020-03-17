// 假设i是1元，j是2元，k是5元
for (var i = 0; i <= 200; i++) {
    for (var j = 0; j <= 100; j++) {
        for (var k = 0; k <= 40; k++) {
            if (1 * i + 2 * j + 5 * k == 200) {
                console.log(`可以用${i}张1元，${j}张2元，${k}张5元`)
            }
        }
    }
}