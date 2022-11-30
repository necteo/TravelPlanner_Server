const express = require("express");
const app = express();
const mongoose = require("mongoose");
<<<<<<< HEAD
const hostname = "192.168.0.4";
=======
const hostname = "192.168.0.6";
>>>>>>> 89c150a75b56f45ef89ec2aa67ecc635471a73f6
const port = 3000;
const DB_URI = "mongodb://127.0.0.1:27017/testdb";

const otTestRouter = require("./routers/otTestRouter");
const mainRouter = require("./routers/mainRouter");
const travelGraphRouter = require("./routers/travelGraphRouter");
const server = async () => {
  try {
    await mongoose.connect(DB_URI);
    app.use(express.json());
    app.use(mainRouter);
    app.use(travelGraphRouter);
    app.listen(port, hostname, function () {
      console.log("server is running");
    });
  } catch (err) {
    console.log(err);
  }
};
server();
