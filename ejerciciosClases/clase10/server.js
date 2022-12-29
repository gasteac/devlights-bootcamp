const express = require("express");
const app = express();
const userRoute = require("./routes/user");
const log = require("./middelwares/log");
const authenticate = require("./middelwares/authentication");
const mongoose = require("mongoose");

//Middleware a nivel global
app.use(log);
app.use(express.json());

//get all
app.get("/", (req, res)=>{
    res.send("hola mundo desde Express aaaaaaaaaa")
})
app.use("/user", authenticate, userRoute);

mongoose.set('strictQuery', true);

mongoose.connect("mongodb://127.0.0.1:27017/clase10", (error) =>{
    if(error){
        console.log("error en la conexion a mongo")
    } else {
        console.log('conexion exitosa oaaa')
    }
})

app.listen(3000);