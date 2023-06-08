const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newAssetSchema = new Schema({
  id: {
    type: Number,
  },
  nodeId: {
    type: Number,
  },
  ipAddress: {
    type: String,
  },
  nodeName: {
    type: String,
  },
  category: {
    type: String,
  },
  oid: String,
  status: {
    type: Boolean,
  },
  switchIP: String,
  switchPort: String,
  stackId: String,
  location: {
    type: String,
  },
  severity: {
    type: Number,
  },
  severityForeGroundColor: String,
  severityBackGroundColor: String,
  managementURL: String,
  liveStatusURL: String,
  backgroundURL: String,
  deviceMessage: String,
  serverGroupId: String,
  control: String,
  xcoordinate: String,
  ycoordinate: String,
});

const NewAsset = mongoose.model("NewAsset", newAssetSchema);

module.exports = NewAsset;
