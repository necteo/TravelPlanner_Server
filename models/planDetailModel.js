const mongoose = require("mongoose");
const { Schema } = mongoose;
var detailSchema = new Schema({
  place_id: { type: Number, required: true },
  date: { type: Date },
  startTime: { type: String },
  endTime: { type: String },
  details: String,
});
const PlanDetailSchema = new Schema({
  plan_id: { type: Number, required: true },
  trip_id: { type: Number, required: true },
  //배열로 해야함
  plan: [detailSchema],
});

const PlanDetail = mongoose.model("Plan_Detail", PlanDetailSchema);
module.exports = { PlanDetail };
