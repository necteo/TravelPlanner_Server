const mongoose = require("mongoose");
const { Schema } = mongoose;

const TripSchema = new Schema({
  trip_id: Number,
  name: String,
  write_code: Number,
  share_code: Number,
});
const Trip = mongoose.model("Trip", TripSchema);
module.exports = { Trip };
