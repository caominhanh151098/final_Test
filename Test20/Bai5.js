let array = [5, 7.3, 12.1, -7.6, 79.5, 3.1, 3, -123.1, 3, -235.5, 65.3, 0.4, 423.1, -4.1, 23.6, 112.8, -4.2, 64.2];

function find(arr, x, y) {
    for (let i = 0; i < arr.length; i++) {
        if (x <= arr[i] && arr[i] <= y) {
            console.log(arr[i]);
        }
    }
}

find(array, 30, 100);