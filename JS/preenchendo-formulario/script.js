for(d = 1; d <= 31; d++){
    dia.innerHTML += `<option>${d}</option>`
}

let meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

for(m = 0; m < meses.length; m++){
    mes.innerHTML += `<option>${meses[m]}</option>`
}

let anoAtual = new Date().getFullYear()

for(a = 1975; a <= anoAtual; a++){
    ano.innerHTML += `<option>${a}</option>`
}