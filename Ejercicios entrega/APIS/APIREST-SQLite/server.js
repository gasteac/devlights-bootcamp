const express = require("express");
const app = express();
const apiRoutes = require("./routes/index");
const db = require("./models/index");
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

db.sync().then(() => {
    console.log("Conectando a SQLite")
}).catch(() => {
    console.log("Hubo un error")
})

app.listen(3000)