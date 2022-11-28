const express = require("express");
const app = express();
const mongoose = require("mongoose");
const hostname = "192.168.0.6";
const port = 3000;
const DB_URI = "mongodb://127.0.0.1:27017/testdb";

const otTestRouter = require("./routers/otTestRouter");

const server = async () => {
  try {
    await mongoose.connect(DB_URI);
    app.use(express.json());
    app.use(otTestRouter);
    app.listen(port, hostname, function () {
      console.log("server is running");
    });
  } catch (err) {
    console.log(err);
  }
};
server();
