const express = require("express");
const router = express.Router();
const { OtTest } = require("../models/otTestModel");

router.post("/OtTest", async (req, res) => {
  const otTest = new OtTest(req.body);
  await otTest.save();
  return res.send({ otTest });
});
module.exports = router;
