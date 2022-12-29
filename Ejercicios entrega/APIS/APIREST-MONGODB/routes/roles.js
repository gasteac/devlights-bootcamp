const express = require("express");
const rolesRoutes = express.Router();
const rolesModel = require("../schemas/roles");

//Obtener todos los roles
rolesRoutes.get("/", (req,res) => {
    rolesModel.find({}, (error, data)=> {
        if(error){
            res.json({status:500, data: error})
        } else{
            res.json({status: 200, data: data})
        }
    })
})

//Obtener roles por id
rolesRoutes.get("/:id", (req,res)=>{
    rolesModel.find({id: req.params._id}, (error, data)=>{
        if(error){
            res.json({ status: 500, data: error })
        } else {
            res.json({ status: 200, data: data })
        }
    })
})

//Crear un nuevo rol
rolesRoutes.post("/create", (req, res) => {
    const rol = new rolesModel(req.body);
    rol
    .save()
    .then((document) => {
        res.json({ status: 200, data: document })
    })
    .catch((error) => {
        res.json({ status: 500, data: error });
    });
});

//Borrar roles por id
rolesRoutes.delete("/:id", (req, res) => {
    rolesModel.findOneAndDelete({id: req.params.id}, {new: true}, (error, data)=>{
        if(error){
            res.json({ status: 500, data: error })
        } else {
            res.json({ status: 200, data: data })
        }
    })
})

//Actualizar roles por id
rolesRoutes.put("/:id", (req, res) => {
    rolesModel.findOneAndUpdate({id: req.params._id}, req.body, (error, data)=>{
        if(error){
            res.json({ status: 500, data: error })
        } else {
            res.json({ status: 200, data: data })
        }
    }
)})

module.exports = rolesRoutes