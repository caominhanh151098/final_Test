let array = [5, 7.3, 12.1, -7.6, 79.5, 3.1, 3, -123.1, 3, -235.5, 65.3, 0.4, 423.1, -4.1, 23.6, 112.8, -4.2, 64.2];

function find(arr) {
    let array_1 = new Array(arr.length);
    console.log(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            array_1[i] = -arr[i];
        }
        else {
            array_1[i] = arr[i]
        }
    }
    for (let i = 1; i < arr.length; i++) {
        if (array_1[i] > array_1[i - 1]) {
            console.log(arr[i]);
        }
    }
}
find(array);
