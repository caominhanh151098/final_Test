let array = [5, 7, 12, -7, 79, 3, 3, -123, 3, -235, -65, 0, 423, -4, 23, 112, -4, -64];


function getAvg(arr) {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
            count ++;
            console.log(arr[i]);
        }
    }
    return sum / count;
}

console.log(getAvg(array));