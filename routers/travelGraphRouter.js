const express = require("express");
const router = express.Router();
const { PlanDetail } = require("../models/planDetailModel");
const { Place } = require("../models/placeModel");

const OtTool = require("./otTool");

const otTool = new OtTool("travelGraphRouter");

router.post("/PlanDetail/read", async (req, res) => {
  const planDetails = await PlanDetail.find({}).find({
    trip_id: req.body.trip_id,
  });
  console.log("read ");
  return res.send(planDetails);
});
//plan_id, trip_id index
router.post("/PlanDetail/create", async (req, res) => {
  const findPlan = await PlanDetail.find({}).find({
    trip_id: req.body.trip_id,
    plan_id: req.body.plan_id,
  });

  console.log(req.body.index);
  var newPlan = new PlanDetail();

  newPlan.trip_id = req.body.trip_id;
  const planId = { plan_id: "" };
  var voidPlan = {
    place_id: -1,
    place_name: "",
    date: "",
    startTime: "",
    endTime: "",
    details: "",
    isDup: false,
  };

  if (findPlan.length == 0) {
    newPlan.plan_id = (Math.random() * 10000).toFixed();
    newPlan.plan = [voidPlan];
    await newPlan.save();
    planId.plan_id = newPlan.plan_id;
  } else {
    let isNew = true;
    const arr = new Array();

    //끝에 추가
    if (req.body.index == findPlan[0].plan.length - 1) {
      for (var i = 0; i < findPlan[0].plan.length; i++) {
        arr.push(findPlan[0].plan[i]);
      }
      arr.push(voidPlan);
      isNew = false;
      planId.plan_id = findPlan.plan_id;
    } else {
      //배열 복사
      for (var i = 0; i < req.body.index; i++) {
        arr.push(findPlan[0].plan[i]);
      }
      arr.push(voidPlan);
      for (var i = req.body.index; i < findPlan[0].plan.length; i++) {
        arr.push(findPlan[0].plan[i]);
      }
      isNew = true;
    }

    if (isNew) {
      newPlan.plan_id = (Math.random() * 10000).toFixed();
      newPlan.plan = arr;
      await newPlan.save();
      planId.plan_id = newPlan.plan_id;
    } else {
      const filter = {
        trip_id: req.body.trip_id,
        plan_id: req.body.plan_id,
      };
      const update = { plan: arr };

      const updatedPlanDetail = await PlanDetail.findOneAndUpdate(
        filter,
        update,
        { new: true }
      );
    }
  }
  const resData = await PlanDetail.find({}).find({
    trip_id: req.body.trip_id,
  });
  console.log("------------------------------------");
  console.log(resData);
  otTool.pop(req.body.trip_id, resData);

  return res.send(planId);
});

router.post("/PlanDetail/delete", async (req, res) => {
  var findPlan = await PlanDetail.find({}).find({
    trip_id: req.body.trip_id,
    plan_id: req.body.plan_id,
  });

  const arr = new Array();

  for (var i = 0; i < findPlan[0].plan.length; i++) {
    arr.push(findPlan[0].plan[i]);
  }

  arr.splice(req.body.index, 1);

  if (arr.length == 0) {
    await PlanDetail.findOneAndDelete({
      trip_id: req.body.trip_id,
      plan_id: req.body.plan_id,
    });
  } else {
    const filter = {
      trip_id: req.body.trip_id,
      plan_id: req.body.plan_id,
    };
    const update = { plan: arr };

    await PlanDetail.findOneAndUpdate(filter, update, {
      new: true,
    });
  }

  const resData = await PlanDetail.find({}).find({
    trip_id: req.body.trip_id,
  });
  otTool.pop(req.body.trip_id, resData);
  return res.send(resData);
});

router.post("/PlanDetail/change", async (req, res) => {
  const id = req.body.trip_id;
  const planDetails = await PlanDetail.find({}).find({
    trip_id: req.body.trip_id,
  });
  otTool.push(req.body.trip_id, res);
});

module.exports = router;
