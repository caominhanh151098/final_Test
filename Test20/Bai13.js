let array = [5, 7, 16, 76, 79, 3, 3, 123, 3, 235, 65, 0, 423, 4, 23, 112, 4, 64];
let array_1 = [79, 3, 23, 235, 5];

let bool = true;
let test = new Array(array_1.length);
for (let i = 0; i < array_1.length; i++) {
    test[i] = 0;
}

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array_1.length; j++) {
        if (array[i] == array_1[j]) {
            test[j]++;
        }
    }
}

for (let i = 0; i < array_1.length; i++) {
    console.log(test[i]);
    if (test[i] == 0) {
        bool = false;
    }
}

console.log(bool);