let array = [5, 7, 12, 7, 79, 3, 3, 123, 3, 235, 65, 0, 423, 4, 23, 112, 4, 64];


function getSum(arr) {
    let sum = 5;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(getSum(array));