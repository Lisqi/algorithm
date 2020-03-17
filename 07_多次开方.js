var now = 2;

for (var i = 0; i < 5; i++) {
    now = Math.sqrt(now) / 2;
}

console.log(now * 2);