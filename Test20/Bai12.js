let array = [5, 7, 16, 76, 79, 3, 3, 123, 3, 235, 65, 0, 423, 4, 23, 112, 4, 64];

let bool = true;

for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i+1]) {
        bool = false;
    }
}

console.log(bool);