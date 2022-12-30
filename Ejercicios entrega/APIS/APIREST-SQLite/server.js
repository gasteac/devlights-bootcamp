const express = require("express");
const app = express();
const apiRoutes = require("./routes/index");
const db = require("./models/index");

app.use(express.json());

app.use("/api", apiRoutes)

db.sync().then(() => {
    console.log("Conectando a SQLite")
}).catch(() => {
    console.log("Hubo un error")
})

app.listen(3000)