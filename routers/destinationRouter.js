const express = require("express");
const router = express.Router();
const { PlanDetail } = require("../models/planDetailModel");
const OtTool = require("./otTool");

const otTool = new OtTool("destinationRouter");

router.post("/destination/read", async (req, res) => {
  const findDestination = await PlanDetail.find({}).find({
    trip_id: req.body.trip_id,
    plan_id: req.body.plan_id,
  });

  const resData = findDestination[0].plan[req.body.index];

  return res.send(resData);
});

router.post("/destination/update/date", async (req, res) => {
  const id = req.body.trip_id + req.body.plan_id + req.body.index;
  const findPlan = await PlanDetail.find({}).find({
    trip_id: req.body.trip_id,
    plan_id: req.body.plan_id,
  });
  console.log("--------------------------------");
  console.log(req.body.index);

  const arr = new Array();
  for (var i = 0; i < findPlan[0].plan.length; i++) {
    if (i == req.body.index) {
      findPlan[0].plan[i].date = req.body.date;
      arr.push(findPlan[0].plan[i]);
    } else {
      arr.push(findPlan[0].plan[i]);
    }
  }
  const filter = {
    trip_id: req.body.trip_id,
    plan_id: req.body.plan_id,
  };
  const update = { plan: arr };

  const updatedPlanDetail = await PlanDetail.findOneAndUpdate(filter, update, {
    new: true,
  });

  otTool.pop(id, findPlan[0].plan[req.body.index]);

  return res.send(findPlan);
});

router.post("/destination/update/startTime", async (req, res) => {
  const id = req.body.trip_id + req.body.plan_id + req.body.index;
  const findPlan = await PlanDetail.find({}).find({
    trip_id: req.body.trip_id,
    plan_id: req.body.plan_id,
  });

  const arr = new Array();
  for (var i = 0; i < findPlan[0].plan.length; i++) {
    if (i == req.body.index) {
      findPlan[0].plan[i].startTime = req.body.startTime;
      arr.push(findPlan[0].plan[i]);
    } else {
      arr.push(findPlan[0].plan[i]);
    }
  }
  const filter = {
    trip_id: req.body.trip_id,
    plan_id: req.body.plan_id,
  };
  const update = { plan: arr };

  const updatedPlanDetail = await PlanDetail.findOneAndUpdate(filter, update, {
    new: true,
  });

  otTool.pop(id, findPlan[0].plan[req.body.index]);

  return res.send(findPlan);
});

router.post("/destination/update/endTime", async (req, res) => {
  const id = req.body.trip_id + req.body.plan_id + req.body.index;
  const findPlan = await PlanDetail.find({}).find({
    trip_id: req.body.trip_id,
    plan_id: req.body.plan_id,
  });

  const arr = new Array();
  for (var i = 0; i < findPlan[0].plan.length; i++) {
    if (i == req.body.index) {
      findPlan[0].plan[i].endTime = req.body.endTime;
      arr.push(findPlan[0].plan[i]);
    } else {
      arr.push(findPlan[0].plan[i]);
    }
  }
  const filter = {
    trip_id: req.body.trip_id,
    plan_id: req.body.plan_id,
  };
  const update = { plan: arr };

  const updatedPlanDetail = await PlanDetail.findOneAndUpdate(filter, update, {
    new: true,
  });

  otTool.pop(id, findPlan[0].plan[req.body.index]);

  return res.send(findPlan);
});

router.post("/destination/update/details", async (req, res) => {
  const id = req.body.trip_id + req.body.plan_id + req.body.index;
  const findPlan = await PlanDetail.find({}).find({
    trip_id: req.body.trip_id,
    plan_id: req.body.plan_id,
  });

  const arr = new Array();
  for (var i = 0; i < findPlan[0].plan.length; i++) {
    if (i == req.body.index) {
      findPlan[0].plan[i].details = req.body.details;
      arr.push(findPlan[0].plan[i]);
    } else {
      arr.push(findPlan[0].plan[i]);
    }
  }
  const filter = {
    trip_id: req.body.trip_id,
    plan_id: req.body.plan_id,
  };
  const update = { plan: arr };

  const updatedPlanDetail = await PlanDetail.findOneAndUpdate(filter, update, {
    new: true,
  });

  otTool.pop(id, findPlan[0].plan[req.body.index]);

  return res.send(findPlan);
});

router.post("/destination/change", async (req, res) => {
  const id = req.body.trip_id + req.body.plan_id + req.body.index;
  otTool.push(id, res);
});

module.exports = router;
