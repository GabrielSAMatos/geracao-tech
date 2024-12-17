const express = require('express');
const PrivateRoutes = require('./routes/PrivateRoutes');
const PublicRoutes = require('./routes/PublicRoutes');


const host = "localhost";
const port = 3000;

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    return res.send("Backend com NODEJS + Express");
});

//ROTAS PUBLICAS
app.use(PublicRoutes);

//ROTAS PRIVADAS
app.use(PrivateRoutes);


//PASSAGEM DE DADOS PARA O BACKEND
app.get('/test/:code', (req, res) => {
    //Querys
    const query = req.query;
    let data = "Querys: " + query.name + " "+ query.surname
    
    //Params
    const params = req.params;
    data += "<br> Params: " + params.code;

    //Body
    const body = req.body;
    data += "<br> Body: " + JSON.stringify(body);



    return res.send(data);

})


app.listen(port, host, () => {
    console.log(`Server executing at http://${host}:${port}`);
});