const express = require("express");
const rolesModel = require("../models/roles");
const rolesRoutes = express.Router();

//Obtenemos todos los roles
rolesRoutes.get("/", async (req, res) => {
    const data = await rolesModel.findAll()
    res.json({ status: 200, data: data });
});

//Creamos un nuevo rol
rolesRoutes.post("/create", async (req, res) => {
    const data = await rolesModel.create(req.body);
    res.json({ status: 200, data: data });
})

//Obtenemos un usuario por id
rolesRoutes.get("/:id", async (req, res) => {
    const data = await rolesModel.findOne({
        where: {id: req.params.id}
    })
    res.json({ status: 200, data })
})

//Actualizamos un rol por id
rolesRoutes.put("/:id", async (req, res) => {
    const data = await rolesModel.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ status: 200, data });
})

//Si no podemos utilizar async, usamos .then y .catch
rolesRoutes.delete("/:id", (req, res) => {
    console.log("id", req.params.id);
    rolesModel.destroy({
        where: { id: req.params.id }
    }).then((data) => {
        res.json({ status: 200, data });
    });
})

module.exports = rolesRoutes;