const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const Asset = require("./models/asset");

app.use(express.json());
app.use(cors());

const db_URL = process.env.db_URL || "mongodb://127.0.0.1:27017/topoDB";

mongoose.set("strictQuery", false);
mongoose
  .connect(db_URL)
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

app.get("/getTopologyData", async (req, res) => {
  const topologyData = await Asset.find({});
  res.json({ data: topologyData });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server running at port ${PORT}`));
