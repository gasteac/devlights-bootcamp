const express = require("express");
const app = express();
const apiRoutes = require("./routes")
const mongoose = require("mongoose");
const log = require("./middlewares/log")
const authenticate = require("./middlewares/authentication");

//Middleware a nivel app
app.use(log)
app.use(express.json());

//Middleware a nivel ruta/s
app.use("/api", authenticate, apiRoutes)

app.get("/api", (req, res) => {
    res.send("Bienvenido a la API");
});

app.get("/", (req, res) => {
    res.send("Seccion no creada aun");
});


mongoose.set('strictQuery', true);

mongoose.connect("mongodb://127.0.0.1:27017/APIREST-MONGODB", (error) =>{
    if(error){
        console.log("Error en la conexion con MongoDB")
    } else {
        console.log('Conexion exitosa')
    }
})

app.listen(3000);