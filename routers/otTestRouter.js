const express = require("express");
const router = express.Router();
const { OtTest } = require("../models/otTestModel");

let data = OtTest({ name: "Quack" });

router.post("/OtTest/start", async (req, res) => {
  const startData = data;

  return res.send(startData);
});

router.post("/OtTest/wait", async (req, res) => {
  const otTest = new OtTest(req.body);

  await otTest.save();
  return res.send(otTest);
});

router.post("/OtTest/change", async (req, res) => {
  const otTest = new OtTest(req.body);
  let getData = req.body.name;
  data.name = data.name + getData;
  console.log(req.body.name);
  return res.send(data);
});

module.exports = router;
