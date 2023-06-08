const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const summarySchema = new Schema({
    count: Number,
    category: String,
});

const Summary = mongoose.model("Summary", summarySchema);

module.exports = Summary;