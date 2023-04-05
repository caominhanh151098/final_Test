let array = [5, 7, 16, 76, 79, 3, 3, 123, 3, 235, 65, 0, 423, 4, 23, 112, 4, 64];
let count = 0;
for (let i = 0; i < array.length - 1; i++) {
    if (array[i] % 2 == 0 && array[i + 1] % 2 == 0) {
        count++;
    }
}
console.log(count);