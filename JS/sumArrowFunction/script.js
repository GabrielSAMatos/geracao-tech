let skarner = {
    nome: "skarner",
    genero: "escorpiao",
    habilidades: ["Pedra", "Escudo", "Corre", "Puxa"],
    
   habQ: () => {return document.write(`<h1>Olha a preda</h1>`)},
   habW: () => {return document.write(`<h1>Escudo pah</h1>`)},
   habR: () => {console.log("Peguei 3")}
}

skarner.habQ()
skarner.habW()
