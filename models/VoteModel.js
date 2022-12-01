const mongoose = require("mongoose");
const { Schema } = mongoose;

const VoteSchema = new Schema({
  trip_id: { type: Number, required: true },
  plan_id: { type: Number, required: true },
  //배열로
  member: String,
});
const Vote = mongoose.model("Vote", VoteSchema);
module.exports = { Vote };
