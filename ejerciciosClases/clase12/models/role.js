import db from "../db.js";
import { DataTypes } from "sequelize";

const Role = db.define("Role", {
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
});

export default Role;