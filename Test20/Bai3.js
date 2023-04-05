let array = [5, 7, 12, 7, 79, 3, 3, 123, 3, 235, 65, 0, 423, 4, 23, 112, 4, 64];


function arrange(arr) {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 == 0) {
            temp = arr[i];
            for (let j = i; j > 0; j--) {
                arr[j] = arr[j - 1];
            }
            arr[0] = temp;
        }
    }
    return arr;
}

console.log(arrange(array));
// [
//     423,   0, 3, 123,   3,  3, 12,
//       5,   7, 7,  79, 235, 65,  4,
//      23, 112, 4,  64
//   ]
