const mongoose = require("mongoose");
const { Schema } = mongoose;

const TripSchema = new Schema({
  trip_id: { type: Number, required: true, unique: true },
  name: { type: String },
  write_code: { type: Number },
  share_code: { type: Number },
});
const Trip = mongoose.model("Trip", TripSchema);
module.exports = { Trip };
