const express = require('express');
const UsersRoutes = require('./routes/UsersRoutes');


const host = "localhost";
const port = 3000;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    return res.send("Backend com NODEJS + Express");
});

app.use(UsersRoutes);

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