// let arrays = new Array();
let arrays = [
    [58, 72, 25, 45, 36, 49],
    [47, 65, 30, 43, 70, 31],
    [99, 72, 46, 37, 26, 13],
    [97, 9, 62, 62, 12, 59],
    [50, 59, 69, 44, 49, 12],
    [47, 87, 99, 56, 57, 41]
];

// for (let i = 0; i < 6; i++) {
//     arrays[i] = [0, 0, 0, 0, 0, 0];
// }

// for (let i = 0; i < 6; i++) {
//     for (let j = 0; j < 6; j++) {
//         arrays[i][j] = Math.floor(Math.random() * 100);
//     }
// }

console.log(arrays);
let test = [true, true, true, true, true, true];

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
        if (arrays[i][j] < arrays[i][j + 1]) {
            test[i] = false;
        }
    }
}

for (let i = 0; i < 6; i++) {
    if (test[i] == true) {
        console.log(arrays[i]);
    }
}