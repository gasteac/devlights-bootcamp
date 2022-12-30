const { DataTypes } = require('sequelize');
const db = require('./index');

const userModel = db.define('User', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    adress: DataTypes.STRING

});

module.exports = userModel;