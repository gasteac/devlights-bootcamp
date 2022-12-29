const express = require("express");
const tasksRoutes = express.Router();
const tasksModel = require("../schemas/tasks");

//Obtener todas los tareas
tasksRoutes.get("/", (req,res) => {
    tasksModel.find({}, (error, data)=> {
        if(error){
            res.json({status:500, data: error})
        } else{
            res.json({status: 200, data: data})
        }
    })
})

//Obtener tareas por id
tasksRoutes.get("/:id", (req,res)=>{
    tasksModel.find({id: req.params._id}, (error, data)=>{
        if(error){
            res.json({ status: 500, data: error })
        } else {
            res.json({ status: 200, data: data })
        }
    })
})

//Crear una nueva tarea
tasksRoutes.post("/create", (req, res) => {
    const task = new tasksModel(req.body);
    task.save()
    .then((document) => {
        res.json({ status: 200, data: document })
    })
    .catch((error) => {
        res.json({ status: 500, data: error });
    });
});

//Borrar tareas por id
tasksRoutes.delete("/:id", (req, res) => {
    tasksModel.findOneAndDelete({id: req.params.id}, {new: true}, (error, data)=>{
        if(error){
            res.json({ status: 500, data: error })
        } else {
            res.json({ status: 200, data: data })
        }
    })
})

//Actualizar tareas por id
tasksRoutes.put("/:id", (req, res) => {
    tasksModel.findOneAndUpdate({id: req.params.id}, req.body, (error, data)=>{
        if(error){
            res.json({ status: 500, data: error })
        } else {
            res.json({ status: 200, data: data })
        }
    }
)})

module.exports = tasksRoutes