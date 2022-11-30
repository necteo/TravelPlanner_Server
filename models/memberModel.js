const mongoose = require("mongoose");
const { Schema } = mongoose;

const MemberSchema = new Schema({
  trip_id: Number,
  member_id: String,
  host: Boolean,
});
const Member = mongoose.model("Member", MemberSchema);
module.exports = { Member };
