const { DataTypes } = require('sequelize');
const db = require('./index.js');

const userModel = db.define('User', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: DataTypes.INTEGER
});

module.exports = userModel;