const express = require("express");
const { Member } = require("../models/memberModel");
const router = express.Router();
const { Trip } = require("../models/tripModel");

//trip read
router.post("/Main/trip/read", async (req, res) => {
  var readtrips = new Array();
  const count = Object.keys(req.body).length;

  for (i = 0; i < count; i++) {
    console.log(req.body[i].trip_id);
    readtrips.push(await Trip.find({}).find({ trip_id: req.body[i].trip_id }));
  }

  return res.send(readtrips);
});

//member join
router.post("/Main/joinTrip", async (req, res) => {
  var joinTrip = await Trip.find({}).find({ trip_id: req.body.trip_id });

  if (joinTrip.length == 0) {
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

//trip create
router.post("/Main/trip/create", async (req, res) => {
  console.log(req.body);

  var newTrip = new Trip();
  newTrip.name = req.body.name;
  newTrip.trip_id = (Math.random() * 10000).toFixed();
  newTrip.write_code = (Math.random() * 1000).toFixed() + newTrip.trip_id;
  newTrip.share_code = (Math.random() * 1000).toFixed() + newTrip.trip_id;
  if (newTrip.write_code == newTrip.share_code) {
    newTrip.share_code = (Math.random() * 1000).toFixed() + newTrip.trip_id;
  }
  await newTrip.save();

  var hostMember = new Member();
  hostMember.trip_id = newTrip.trip_id;
  hostMember.member_id = req.body.member_id;
  hostMember.host = true;
  console.log(hostMember);
  await hostMember.save();

  resTrip = { [newTrip.trip_id]: newTrip };
  console.log(resTrip);
  return res.send(resTrip);
});

//tirp join by code
router.post("/Main/trip/join/code", async (req, res) => {
  console.log(req.body);

  const joinTrip = await Trip.find({}).find({
    write_code: req.body.write_code,
  });

  console.log(joinTrip);
  if (joinTrip.length != 0) {
    var joinMember = new Member();
    joinMember.trip_id = joinTrip[0].trip_id;
    joinMember.member_id = req.body.member_id;
    joinMember.host = false;
    await joinMember.save();
  }
  return res.send(joinTrip);
});
//trip create by code
router.post("/Main/trip/create/code", async (req, res) => {
  var newTrip = await Trip.find({}).find({ share_code: req.body.share_code });
  if (newTrip.length == 0) {
    newTrip.name = req.body.name;
    newTrip.trip_id = (Math.random() * 10000).toFixed();
    newTrip.write_code = (Math.random() * 1000).toFixed() + newTrip.trip_id;
    newTrip.share_code = (Math.random() * 1000).toFixed() + newTrip.trip_id;
    if (newTrip.write_code == newTrip.share_code) {
      newTrip.share_code = (Math.random() * 1000).toFixed() + newTrip.trip_id;
    }
    await newTrip.save();
    var hostMember = new Member();
    hostMember.trip_id = newTrip.trip_id;
    hostMember.member_id = req.body.member_id;
    hostMember.host = true;
    await hostMember.save();
  }

  return res.send(newTrip);
});
//member read
router.post("/Main/member/read", async (req, res) => {
  console.log(req.body);
  var readMembers = await Member.find({}).find({ trip_id: req.body.trip_id });
  return res.send(readMembers);
});

module.exports = router;
