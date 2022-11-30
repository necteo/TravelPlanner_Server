const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlaceSchema = new Schema({
  place_id: { type: Number, required: true, unique: true },
  trip_id: { type: Number, required: true },
  name: { type: String, required: true },
  type: String,
  //이미지 저장해야함
});
const Place = mongoose.model("Place", PlaceSchema);
module.exports = { Place };
