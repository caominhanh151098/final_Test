let array = [5, 7, 16, 7, 79, 3, 3, 123, 3, 235, 65, 0, 423, 4, 23, 112, 4, 64];

function find(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 2; j <= arr[i] / 2; j++) {
            if (j * j == arr[i]) {
                console.log(i);
            }
            if (j * j > arr[i])
                break;
        }
    }
}

find(array);