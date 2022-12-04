const express = require("express");
const router = express.Router();
const { Place } = require("../models/placeModel");
const { Trip } = require("../models/tripModel");
const OtTool = require("./otTool");

const otTool = new OtTool();

router.post("/Place/read", async (req, res) => {
  console.log(req.body.trip_id);
  const places = await Place.find({}).find({ trip_id: req.body.trip_id });
  console.log("read");
  return res.send(places);
});

router.post("/Place/create", async (req, res) => {
  console.log("create");
  var joinTrip = await Trip.find({}).find({ trip_id: req.body.trip_id });
  var places = await Place.find({}).find({ trip_id: req.body.trip_id });

  if (joinTrip.length == 1) {
    var newPlace = new Place();
    newPlace.trip_id = req.body.trip_id;
    newPlace.place_id = (Math.random() * 10000).toFixed();
    newPlace.name = req.body.name;
    newPlace.place_type = req.body.place_type;
    newPlace.save();
  }

  places.push(newPlace);
  otTool.pop(req.body.trip_id, places);

  return res.send(joinTrip);
});

router.post("/Place/delete", async (req, res) => {
  console.log("deletePlace" + req.body.place_id);

  const result = await Place.deleteOne({ place_id: req.body.place_id });
  var places = await Place.find({}).find({ trip_id: req.body.trip_id });
  console.log("deleted");

  console.log(places);
  otTool.pop(req.body.trip_id, places);
  return res.send(result);
});

router.post("/Place/change", async (req, res) => {
  console.log("place/change");
  const id = req.body.trip_id;
  const places = await Place.find({}).find({ trip_id: req.body.trip_id });
  otTool.push(id, res);
});

module.exports = router;
