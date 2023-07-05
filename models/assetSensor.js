const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assetSensorSchema = new Schema({
    id: Number,
    provisioningId: String,
    sensorType: String,
    sensorCode: String,
    sensorStatus: Number,
    xcoordinate: Number,
    ycoordinate: Number,
    customLabels: Object,
});

const AssetSensor = mongoose.model('AssetSensor', assetSensorSchema);

module.exports = AssetSensor;