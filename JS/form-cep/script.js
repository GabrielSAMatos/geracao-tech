cep.onkeyup = () => {
    if(cep.value.length == 8){
        fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(resposta => resposta.json())
        .then(resposta2 => {
            console.log(resposta2)
        })
    }
}


