const { Router } = require("express");
const express = require("express");
const route = express.Router();
const userModel = require("../schemas/user");

//get all
route.get("/", (req, res) => {
    userModel.find({}, (error, data)=>{
        if(error){
            res.json({ status: 500, data: error })
        } else {
            res.json({ status: 200, data: data })
        }
    })
})

//get by id
route.get("/:id", (req,res)=>{
    userModel.find({id: req.params.id}, (error, data)=>{
        if(error){
            res.json({ status: 500, data: error })
        } else {
            res.json({ status: 200, data: data })
        }
    })
})

//post (create)
route.post("/create", (req, res) => {
    console.log("el body es:", req.body)
    const user = new userModel(req.body);
    user
    .save()
    .then((document) => {
        res.json({ status: 200, data: document })
    })
    .catch((error) => {
        res.json({ status: 500, data: error });
    });
});

//delete by id
route.delete("/:id", (req, res) => {
    userModel.findOneAndDelete({id: req.params.id}, {new: true}, (error, data)=>{
        if(error){
            res.json({ status: 500, data: error })
        } else {
            res.json({ status: 200, data: data })
        }
    })
})

route.put("/:id", (req, res) => {
    userModel.findOneAndUpdate({id: req.params.id}, req.body, (error, data)=>{
        if(error){
            res.json({ status: 500, data: error })
        } else {
            res.json({ status: 200, data: data })
        }
    }
)})


module.exports = route;