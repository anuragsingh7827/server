const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alertSchema = new Schema({
  id: Number,
  assetId: Number,
  categoryCode: String,
  serviceCode: String,
  status: Boolean,
  alertGeneratedOn: Number,
  alertClosedOn: Number,
  ipAddress: String,
  nodeName: String,
  alias: String
});

const Alert = mongoose.model("Alert", alertSchema);

module.exports = Alert;
