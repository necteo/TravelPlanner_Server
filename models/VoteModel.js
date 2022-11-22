const mongoose = require("mongoose");
const { Schema } = mongoose;

const VoteSchema = new Schema({
  plan_id: Number,
  count: Number,
  member_id: String,
});
const Vote = mongoose.model("Vote", VoteSchema);
module.exports = { Vote };
