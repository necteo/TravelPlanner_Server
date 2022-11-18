const mongoose = require("mongoose");
const { Schema } = mongoose;

const OtTestSchema = new Schema(
  {
    str: String,
  },
  { timestamps: true }
);
const OtTest = mongoose.model("OtTest", OtTestSchema);
module.exports = { OtTest };
