let array = [5, 7, 16, 76, 79, 3, 3, 123, 3, 235, 65, 0, 423, 4, 23, 112, 4, 64];
let array_1 = [5,9,2,5,5,2,9,5];
let bool = 1;

for (let i = 0; i < array.length; i++) {
    if (array[i] != array[array.length - 1 - i]) {
        bool = 0;
    }
}

console.log(bool);
