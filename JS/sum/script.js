let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let res = document.getElementById("res");
const btn = document.getElementById("btnSUM");

btn.addEventListener("click", () => {
    if (isNaN(n1.value) || n1.value == false){
        res.textContent = "N1 nao eh um numero";
    } else if (n2.value == false){
        res.textContent = "N2 nao eh um numero"
    } else {

    let sum = parseInt(n1.value) + parseInt(n2.value);
    res.textContent = sum;
    }

})

