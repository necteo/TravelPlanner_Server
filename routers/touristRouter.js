const express = require("express");
const router = express.Router();
const { Place } = require("../models/placeModel");

router.post("/Place/read", async (req, res) => {
  const places = await Place.find({}).find({ trip_id: req.body.trip_id });
  return res.send(places);
});

router.post("/Place/create", async (req, res) => {
  var joinTrip = await Trip.find({}).find({ trip_id: req.body.trip_id });
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
    return res.send(newPlace);
  }
});

router.post("/Place/delete", async (req, res) => {
  await Place.findOneAndDelete({}).find({ place_id: req.body.place_id });
  return res.send(data);
});

module.exports = router;
