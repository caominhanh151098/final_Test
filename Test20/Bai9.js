let array = [5, 7, 16, 7, 79, 3, 3, 123, 3, 235, 65, 0, 423, 4, 23, 112, 4, 64];

function isPrime(number) {
    let result = true;
    if (number == 1) {
        return result = false;
    }
    if (number == 2) {
        return result = true;
    } 
    else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return result = false;
            }
        }
        return result = true;
    }
} 

function find(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(isPrime(arr[i])){
            count ++;
        }
    }
    return console.log(count);
}

find(array);