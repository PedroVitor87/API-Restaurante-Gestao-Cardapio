const express = require('express');
const cors = require('cors');
const database = require('./data/database');
const app = express();
const PORT = 3333;
const routes = require('./routes/routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

database.sync();

app.listen(PORT, () => {
    console.log(`Microsserviço de Restaurante funcionando na porta ${PORT}`);
});

