let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let res = document.getElementById("res");
const btn = document.getElementById("btnSUM");

btn.addEventListener("click", () => {

    let sum = parseInt(n1.value) + parseInt(n2.value);
    parse
    res.textContent = sum;
})