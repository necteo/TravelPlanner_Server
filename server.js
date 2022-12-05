const express = require("express");
const app = express();
const mongoose = require("mongoose");
const hostname = "192.168.0.6";
const port = 3000;
const DB_URI = "mongodb://127.0.0.1:27017/testdb";

const mainRouter = require("./routers/mainRouter");
const travelGraphRouter = require("./routers/travelGraphRouter");
const touristRouter = require("./routers/touristRouter");
const voteRouter = require("./routers/voteRouter");
const destinationRouter = require("./routers/destinationRouter");

const deleteRouter = require("./routers/deleteRouter");
const otTest = require("./routers/OTtestRouter");
const server = async () => {
  try {
    await mongoose.connect(DB_URI);
    app.use(express.json());
    app.use(mainRouter);
    app.use(touristRouter);
    app.use(travelGraphRouter);
    app.use(voteRouter);
    app.use(destinationRouter);

    app.use(deleteRouter);
    app.use(otTest);
    app.listen(port, hostname, function () {
      console.log("server is running");
    });
  } catch (err) {
    console.log(err);
  }
};
server();
