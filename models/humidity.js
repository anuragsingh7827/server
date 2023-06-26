const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const humiditySchema = new Schema({
    attributeName: String,
    attributeValue: String,
    eventEpoch: Number,
    receivedEpoch: Number,
});

const Humidity = mongoose.model('Humidity', humiditySchema);

module.exports = Humidity;