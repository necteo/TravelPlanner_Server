const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlanDetailSchema = new Schema({
  plan_id: Number,
  trip_id: Number,
  plan: {
    place_id: Number,
    date: Date,
    startTime: Number,
    endTime: Number,
    details: String,
  },
});
const PlanDetail = mongoose.model("Plan_Detail", PlanDetailSchema);
module.exports = { PlanDetail };
