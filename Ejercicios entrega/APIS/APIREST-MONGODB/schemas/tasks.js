const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tasksSchema = new Schema({
    name: String,
    description: String,
})

const tasksModel = mongoose.model("tasks", tasksSchema);

module.exports = tasksModel;