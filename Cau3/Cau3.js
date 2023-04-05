// let array = ['L', 'a', 'm', ' ', 'T', 'e', 's', 't', ' ', 'T', 'a', 'i', ' ', 'C', 'o', 'd', 'e', 'G', 'y', 'm'];

document.getElementById("btn").addEventListener("click", () => {
    let string = document.getElementById("inputNum").value;
    let arrayS = string.split("");
    document.getElementById("outputNum").value = vowel(arrayS);
});

function vowel(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'a' || arr[i] == 'o' ||
            arr[i] == 'e' || arr[i] == 'u' || arr[i] == 'i') {
            count++;
            console.log(i);
        }
    }
    return count;
}