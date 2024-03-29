const activeAlerts = require("./data/activeAlerts");
const allAssets = require("./data/allAssets");
const allAssetsSummary = require("./data/allAssetsSummary");
const assetSensors = require("./data/assetSensors");
const humiditySensor = require("./data/humiditySensor");
const Alert = require("./models/alert");
const Asset = require("./models/asset");
const AssetSensor = require("./models/assetSensor");
const Humidity = require("./models/humidity");
const Summary = require("./models/summary");

module.exports = function seedDB() {
  Alert.insertMany(activeAlerts)
    .then(() => {
      console.log("DB Seeded with active alerts");
      return Asset.insertMany(allAssets);
    })
    .then(() => {
      console.log("DB Seeded with all assets");
      return Summary.insertMany(allAssetsSummary);
    })
    .then(() => {
      console.log("DB Seeded with summary data");
      return Humidity.insertMany(humiditySensor);
    })
    .then(() => {
      console.log("DB Seeded with humidity sensor data");
      return AssetSensor.insertMany(assetSensors);
    })
    .then(() => console.log("DB Seeded with asset sensors data"));
};
