const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlaceSchema = new Schema({
  place_id: Number,
  trip_id: Number,
  name: String,
  type: String,
  write_code: Number,
  share_code: Number,
  //이미지 저장해야함
});
const Place = mongoose.model("Place", PlaceSchema);
module.exports = { Trip };
