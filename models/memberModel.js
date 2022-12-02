const mongoose = require("mongoose");
const { Schema } = mongoose;

const MemberSchema = new Schema({
  trip_id: { type: Number, required: true },
  member_id: { type: String, required: true },
  host: Boolean,
});
const Member = mongoose.model("Member", MemberSchema);
module.exports = { Member };
