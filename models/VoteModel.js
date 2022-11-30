const mongoose = require("mongoose");
const { Schema } = mongoose;

const VoteSchema = new Schema({
  plan_id: { type: Number, required: true },
  members: {
    member_id: { type: String, required: true, unique: true },
  },
});
const Vote = mongoose.model("Vote", VoteSchema);
module.exports = { Vote };
