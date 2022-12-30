const express = require("express");
const tasksModel = require("../models/tasks");
const tasksRoutes = express.Router();

//Obtenemos todas las tareas
tasksRoutes.get("/", async (req, res) => {
    const data = await tasksModel.findAll()
    res.json({ status: 200, data: data });
});

//Creamos una nueva tarea
tasksRoutes.post("/create", async (req, res) => {
    const data = await tasksModel.create(req.body);
    res.json({ status: 200, data: data });
})

//Obtenemos una tarea por id
tasksRoutes.get("/:id", async (req, res) => {
    const data = await tasksModel.findOne({
        where: {
            id: req.params.id
        }
    })
    res.json({ status: 200, data })
})

//Actualizamos una tarea por id
tasksRoutes.put("/:id", async (req, res) => {
    const data = await tasksModel.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ status: 200, data });
})

//Si no podemos utilizar async, usamos .then y .catch
tasksRoutes.delete("/:id", (req, res) => {
    console.log("id", req.params.id);
    tasksModel.destroy({
        where: { id: req.params.id }
    }).then((data) => {
        res.json({ status: 200, data });
    });
})

module.exports = tasksRoutes;