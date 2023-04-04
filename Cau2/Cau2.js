let array = [3, 6, 18, 1, 13, 12, 9, 3, 16, 1, 5, 7, 10, 8];


document.getElementById("outputNum").value = array.toString();

document.getElementById("btn").addEventListener("click", () => {
    let num = +document.getElementById("inputNum").value;
    if (find_X(array, num) != -1) {
        alert(`Vị trí đầu tiên là: ${find_X(array, num)}`);
    }
    else {
        alert(`Số không có trong mảng`);
    }
});
function find_X(arr, x) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            index = i;
            break;
        }
    }
    return index;
}

// console.log(find_X(array, 7));
// console.log(array);