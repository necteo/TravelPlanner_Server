const express = require("express");

const router = express.Router();

let postArr = new Array();

let i = 0;
//OT test
router.post("/OTtest", async (req, res) => {
  postArr.push([i, res]);
  i = i + 1;
  console.log(i);
});

//res
router.post("/OTtest/change", async (req, res) => {
  console.log("출력");
  postArr.forEach((element) => {
    element[1].send();
  });
  res.send();
});
module.exports = router;
