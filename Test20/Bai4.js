let array = [5, 7, 12, -7, 79, 3, 3, -123, 3, -235, -65, 0, 423, -4, 23, 112, -4, -64];

function reverse(arr) {
    let temp = 0;
    let len = parseInt(arr.length/2);
    for (let i = 0; i < len; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return console.log(arr);
}

reverse(array);