const express = require("express");
const usersModel = require("../models/users");
const usersRoutes = express.Router();

//Obtenemos todos los usuarios
usersRoutes.get("/", async (req, res) => {
    const data = await usersModel.findAll()
    res.json({ status: 200, data: data });
});

//Creamos un nuevo usuario
usersRoutes.post("/create", async (req, res) => {
    const data = await usersModel.create(req.body);
    res.json({ status: 200, data: data });
})

//Obtenemos un usuario por id
usersRoutes.get("/:id", async (req, res) => {
    const data = await usersModel.findOne({
        where: {
            id: req.params.id
        }
    })
    res.json({ status: 200, data })
})

//Actualizamos un usuario por id
usersRoutes.put("/:id", async (req, res) => {
    const data = await usersModel.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ status: 200, data });
})

//Si no podemos utilizar async, usamos .then y .catch
usersRoutes.delete("/:id", (req, res) => {
    console.log("id", req.params.id);
    usersModel.destroy({
        where: { id: req.params.id }
    }).then((data) => {
        res.json({ status: 200, data });
    });
})

module.exports = usersRoutes;