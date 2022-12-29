const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rolesSchema = new Schema({
    name: String,
    description: String,
})

const rolesModel = mongoose.model("roles", rolesSchema);

module.exports = rolesModel;