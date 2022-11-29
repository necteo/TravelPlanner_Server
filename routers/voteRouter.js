const express = require("express");
const router = express.Router();
const { Vote } = require("../models/VoteModel");
const { PlanDetail } = require("../models/planDetailModel");

router.post("/Vote/read", async (req, res) => {
  const places = await Place.find({}).find({ trip_id: req.body.trip_id });
  return res.send(places);
});

router.post("/Vote/create", async (req, res) => {
  var findPlan = await PlanDetail.find({}).find({ plan_id: req.body.plan_id });
  //joinTrip에 값이 있는지 확인
  if (ture) {
    return res.send();
  } else {
    var newPlace = new Place();
    newPlace.trip_id = req.body.trip_id;
    newPlace.place_id = (Math.random() * 10000).toFixed();
    newPlace.place.name = req.body.name;
    newPlace.type = req.body.type;
    newPlace.save();
    return res.send();
  }
});

router.post("/Vote/delete", async (req, res) => {
  await Place.findOneAndDelete({}).find({ place_id: req.body.place_id });
  return res.send(data);
});

module.exports = router;
