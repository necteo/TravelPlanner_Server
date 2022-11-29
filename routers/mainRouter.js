const express = require("express");
const { Member } = require("../models/memberModel");
const router = express.Router();
const { Trip } = require("../models/tripModel");

router.post("/Main/read", async (req, res) => {
  var trips = new Array();
  const count = Object.keys(req.body).length;

  for (i = 0; i < count; i++) {
    console.log(req.body[i].trip_id);
    trips.push(await Trip.find({}).find({ trip_id: req.body[i].trip_id }));
  }

  return res.send(trips);
});

router.post("/Main/joinTrip", async (req, res) => {
  var joinTrip = await Trip.find({}).find({ trip_id: req.body.trip_id });

  console.log(typeof joinTrip.body);
  console.log(joinTrip);
  //joinTrip값이 안들어온거 판별해야함
  if (true) {
    console.log("false");
    return res.send();
  } else {
    console.log("true");
    var joinMember = new Member();
    joinMember.trip_id = req.body.trip_id;
    joinMember.member_id = req.body.member_id;
    joinMember.host = false;
    joinMember.save();
    return res.send(joinMember);
  }
});

router.post("/Main/create", async (req, res) => {
  console.log(req.body);

  var newTrip = new Trip();
  newTrip.name = req.body.name;
  newTrip.trip_id = (Math.random() * 10000).toFixed();
  newTrip.write_code = (Math.random() * 1000).toFixed() + newTrip.trip_id;
  newTrip.share_code = (Math.random() * 1000).toFixed() + newTrip.trip_id;
  if (newTrip.write_code == newTrip.share_code) {
    newTrip.share_code = (Math.random() * 1000).toFixed() + a;
  }
  await newTrip.save();
  var hostMember = new Member();
  hostMember.trip_id = newTrip.trip_id;
  hostMember.member_id = req.body.member_id;
  hostMember.host = true;
  await hostMember.save();
  return res.send(newTrip);
});

module.exports = router;
