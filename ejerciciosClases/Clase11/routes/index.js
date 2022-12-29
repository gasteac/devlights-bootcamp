const express = require("express");
const usersRoutes = require("./users");
const carsRoutes = require("./cars");
const apiRoutes = express.Router();

apiRoutes.use("/users", usersRoutes);

apiRoutes.use("/cars", carsRoutes);

module.exports = apiRoutes;