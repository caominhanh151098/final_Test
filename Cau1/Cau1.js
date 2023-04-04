// let a = 8;
// let b = 12;
// let c = -20;
document.getElementById("btn").addEventListener("click", quadratic);


let result_1 = 0;
let result_2 = 0;

function quadratic() {
    let a = +document.getElementById("inputNum1").value;
    let b = +document.getElementById("inputNum2").value;
    let c = +document.getElementById("inputNum3").value;

    if (a != 0) {
        let delta = Math.pow(b, 2) - (4 * a * c);

        if (delta > 0) {
            result_1 = (-b + Math.sqrt(delta)) / (2 * a);
            result_2 = (-b - Math.sqrt(delta)) / (2 * a);
            alert(`Phương trình có 2 nghiệm:`);
            alert(`x1 = ${result_1}`);
            alert(`x2 = ${result_2}`);
        }
        else
            if (delta == 0) {
                result_1 = -b / 2 * a;
                alert(`Phương trình nghiệm kép:`);
                alert(`x = ${result_1}`);
            }
            else {
                alert(`Phương trình vô ngiệm nghiệm:`);
            }
    }
    else {
        if (b != 0) {
            let result = -c / b;
            alert(`Phương trình có 1 ngiệm: x = ${result}`);
        }
        else
            if (c != 0) {
                alert(`Phương trình vô ngiệm`);
            }
            else {
                alert(`Phương trình vô số ngiệm`);
            }
    }
}
