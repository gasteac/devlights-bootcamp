const express = require("express");

const server = express();

server.get("/", (req, res) => {
    res.send("Hola Mundo");
})

server.get("/contact", (req, res) => {
    res.send("Contacto");
})

server.get("/about", (req, res) => {
    res.send("Acerca de");
})

server.get("/:param1/:param2", (req, res) => {
    res.send(`Mis parametros sonnnn: ${JSON.stringify(req.params)}. Mis query params son: ${JSON.stringify(req.query)}`);
})

server.listen(3000);