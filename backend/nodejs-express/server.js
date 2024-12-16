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

app.listen(port, host, () => {
    console.log(`Server executing at http://${host}:${port}`);
});