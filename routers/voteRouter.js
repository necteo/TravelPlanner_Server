const express = require("express");
const router = express.Router();
const { Vote } = require("../models/VoteModel");
const { PlanDetail } = require("../models/planDetailModel");
const OtTool = require("./otTool");

const otTool = new OtTool("voteRouter");

router.post("/Vote/read", async (req, res) => {
  const Votes = await Vote.find({}).find({
    trip_id: req.body.trip_id,
  });
  return res.send(Votes);
});

router.post("/Vote/voting", async (req, res) => {
  var findVote = await Vote.find({}).find({
    plan_id: req.body.plan_id,
    trip_id: req.body.trip_id,
  });

  const arr = new Array();
  const len = findVote[0].members.length;
  let flag = true;
  for (let i = 0; i < len; i++) {
    if (req.body.member_id != findVote[0].members[i]) {
      arr.push(findVote[0].members[i]);
    } else {
      flag = false;
    }
  }
  if (flag) {
    arr.push(req.body.member_id);
  }
  otTool.pop(req.body.trip_id, reqData);
  return res.send(findVote);
});

router.post("/Vote/change", async (req, res) => {
  otTool.push(req.body.trip_id, res);
});

module.exports = router;
