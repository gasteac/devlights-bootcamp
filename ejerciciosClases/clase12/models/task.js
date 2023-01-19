import db from "../db.js";
import { DataTypes } from "sequelize";

const Task = db.define("Task", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
    description: {
    type: DataTypes.STRING,
    allowNull: false
    },
    status: {type: DataTypes.ENUM("creado", "en progreso", "finalizada"),
    allowNull: true}
});

export default Task;