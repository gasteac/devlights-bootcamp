const express = require("express");
const usersModel = require("../schemas/users");
const usersRoutes = express.Router();

//Obtener todos los usuarios
usersRoutes.get("/", (req,res) => {
    usersModel.find({}, (error, data)=> {
        if(error){
            res.json({status:500, data: error})
        } else{
            res.json({status: 200, data: data})
        }
    })
})

//Obtener usuario por id
usersRoutes.get("/:id", (req,res)=>{
    usersModel.find({id: req.params._id}, (error, data)=>{
        if(error){
            res.json({ status: 500, data: error })
        } else {
            res.json({ status: 200, data: data })
        }
    })
})

//Crear un nuevo usuario
usersRoutes.post("/create", (req, res) => {
    const user = new usersModel(req.body);
    user
    .save()
    .then((document) => {
        res.json({ status: 200, data: document })
    })
    .catch((error) => {
        res.json({ status: 500, data: error });
    });
});

//Borrar usuario por id
usersRoutes.delete("/:id", (req, res) => {
    usersModel.findOneAndDelete({id: req.params.id}, {new: true}, (error, data)=>{
        if(error){
            res.json({ status: 500, data: error })
        } else {
            res.json({ status: 200, data: data })
        }
    })
})

//Actualizar usuario por id
usersRoutes.put("/:id", (req, res) => {
    usersModel.findOneAndUpdate({id: req.params.id}, req.body, (error, data)=>{
        if(error){
            res.json({ status: 500, data: error })
        } else {
            res.json({ status: 200, data: data })
        }
    }
)})

module.exports = usersRoutes