import db from "../db.js";
import { DataTypes } from "sequelize";
import Task from "./task.js";
import Role from "./role.js";

const User = db.define("User", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3, 50],
        msg: "No es un nombre valido",
      },
    },
  },

  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: "No es un email valido",
      },
    },
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

User.Task = User.hasMany(Task)
Task.User = Task.belongsTo(User)
User.Role = User.belongsToMany(Role, {through: "Roles_Users"})
Role.User = Role.belongsToMany(User,  {through: "Roles_Users"})

export default User;
