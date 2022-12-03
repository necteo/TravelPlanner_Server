const express = require("express");
const router = express.Router();
const { Place } = require("../models/placeModel");
const { Trip } = require("../models/tripModel");

router.post("/Place/read", async (req, res) => {
  console.log(req.body.trip_id);
  const places = await Place.find({}).find({ trip_id: req.body.trip_id });
  return res.send(places);
});

router.post("/Place/create", async (req, res) => {
  var joinTrip = await Trip.find({}).find({ trip_id: req.body.trip_id });

  if (joinTrip == 0) {
    return res.send();
  } else {
    var newPlace = new Place();
    newPlace.trip_id = req.body.trip_id;
    newPlace.place_id = (Math.random() * 10000).toFixed();
    newPlace.name = req.body.name;
    newPlace.place_type = req.body.place_type;
    newPlace.save();
    return res.send(newPlace);
  }
});

router.post("/Place/delete", async (req, res) => {
  console.log("deletePlace" + req.body.place_id);

  const result = await Place.deleteOne({ place_id: req.body.place_id });
  console.log("deleted");
  return res.send(result);
});

module.exports = router;
