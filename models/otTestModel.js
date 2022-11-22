const mongoose = require("mongoose");
const { Schema } = mongoose;

const OtTestSchema = new Schema({
  name: String,
});
const OtTest = mongoose.model("OtTest", OtTestSchema);
module.exports = { OtTest };
