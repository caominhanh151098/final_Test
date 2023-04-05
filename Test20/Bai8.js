let array = [5, 7.3, 12.1, -7.6, 79.5, 14, 3.1, 3, -123.1, 3, -235.5, 65.3, 0.4, 423.1, -4.1, 23.6, 112.8, -4.2, 64.2];
let count = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 7 == 0) {
        count++;
    }
}

console.log(count);