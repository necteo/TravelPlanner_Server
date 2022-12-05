const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlanDetailSchema = new Schema({
  plan_id: { type: Number, required: true },
  trip_id: { type: Number, required: true },
  //배열로 해야함
  plan: [
    {
      place_id: { type: Number },
      place_name: { type: String },
      date: { type: String },
      startTime: { type: String },
      endTime: { type: String },
      details: String,
      isDup: Boolean,
    },
  ],
});

const PlanDetail = mongoose.model("Plan_Detail", PlanDetailSchema);
module.exports = { PlanDetail };
