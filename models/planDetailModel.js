const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlanDetailSchema = new Schema({
  plan_id: { type: Number, required: true },
  trip_id: { type: Number, required: true },
  plan: {
    place_id: { type: Number, required: true },
    date: { type: Number, required: true },
    startTime: { type: Number, required: true },
    endTime: { type: Number, required: true },
    details: String,
  },
});
const PlanDetail = mongoose.model("Plan_Detail", PlanDetailSchema);
module.exports = { PlanDetail };
