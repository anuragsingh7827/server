const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const childrenSchema = new Schema({
  level: Number,
  id: { type: String, required: true },
  nodeId: Number,
  ipAddress: String,
  name: { type: String, required: true },
  category: { type: String, required: true },
  status: Boolean,
  location: String,
  cellId: String,
  severity: Number,
  children: [mongoose.Schema.Types.Mixed]
});

const assetSchema = new Schema({
  level: Number,
  id: { type: String, required: true },
  nodeId: Number,
  ipAddress: String,
  name: { type: String, required: true },
  category: { type: String, required: true },
  status: Boolean,
  location: String,
  cellId: String,
  severity: Number,
  children: [mongoose.Schema.Types.Mixed]
});

const Asset = mongoose.model('Asset', assetSchema);

module.exports = Asset;
