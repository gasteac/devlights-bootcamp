const express = require("express");
const app = express();
const apiRoutes = require("./routes")
const mongoose = require("mongoose");
const log = require("./middlewares/log")
const authenticate = require("./middlewares/authentication");

app.use(log)
app.use(express.json());

app.use("/api", authenticate, apiRoutes)

mongoose.set('strictQuery', true);

mongoose.connect("mongodb://127.0.0.1:27017/APIREST-MONGODB", (error) =>{
    if(error){
        console.log("Error en la conexion con MongoDB")
    } else {
        console.log('Conexion exitosa')
    }
})

app.listen(3000);