const express = require("express");
const { Member } = require("../models/memberModel");
const router = express.Router();
const { Trip } = require("../models/tripModel");
const { Place } = require("../models/placeModel");
const { PlanDetail } = require("../models/planDetailModel");

//trip read
router.post("/delete", async (req, res) => {
  console.log("delete");
  const mmmmm = await Trip.find({});

  const count = mmmmm.length;
  for (i = 0; i < count; i++) {
    await Member.deleteMany({ trip_id: mmmmm[i].trip_id });
    await Place.deleteMany({ trip_id: mmmmm[i].trip_id });
    await Trip.find({}).deleteMany({ trip_id: mmmmm[i].trip_id });
    await PlanDetail.find({}).deleteMany({ trip_id: mmmmm[i].trip_id });
  }

  return res.send();
});
module.exports = router;
