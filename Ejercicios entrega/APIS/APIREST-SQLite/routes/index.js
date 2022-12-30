const express = require("express");
const apiRoutes = express.Router();
const usersRoutes = require("./users");
const rolesRoutes = require("./roles");
const tasksRoutes = require("./tasks");


apiRoutes.use("/users", usersRoutes);
apiRoutes.use("/roles", rolesRoutes);
apiRoutes.use("/tasks", tasksRoutes);

module.exports = apiRoutes;