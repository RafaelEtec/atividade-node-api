const express = require('express');

const APP = express();
const PORT = 3000;
const ROUTES = require("./routes/enderecoRoutes");

APP.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

APP.use(express.json());
APP.use("/api", ROUTES);