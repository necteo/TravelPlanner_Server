const express = require("express");
const router = express.Router();
const { PlanDetail } = require("../models/planDetailModel");
const { Place } = require("../models/placeModel");

router.post("/PlanDetail/read", async (req, res) => {
  const planDetails = await PlanDetail.find({}).find({
    trip_id: req.body.trip_id,
  });
  return res.send(planDetails);
});

router.post("/PlanDetail/create", async (req, res) => {
  var joinPlace = await Place.find({}).find({ trip_id: req.body.trip_id });

  //joinPlace에 값이 있는지 확인
  if (ture) {
    return res.send();
  } else {
    var newPlanDetail = new PlanDetail();
    newPlanDetail.plan_id = (Math.random() * 10000).toFixed();
    newPlanDetail.trip_id = req.body.trip_id;

    newPlanDetail.plan.place_id = req.body.plan.place_id;
    newPlanDetail.plan.date = req.body.plan.date;
    newPlanDetail.plan.startTime = req.body.plan.startTime;
    newPlanDetail.plan.endTime = req.body.plan.endTime;
    newPlanDetail.plan.details = req.body.plan.details;
    newPlanDetail.save();
    return res.send(newPlace);
  }
});

router.post("/Place/delete", async (req, res) => {
  await Place.findOneAndDelete({}).find({ place_id: req.body.place_id });
  return res.send(data);
});

router.post("/PlanDetail/test", async (req, res) => {
  console.log(req.body);
  console.log(req.body.second.data);
  return res.send();
});

module.exports = router;
