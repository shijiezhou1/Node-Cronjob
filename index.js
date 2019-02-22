const cron = require("node-cron");
const express = require("express");
const fs = require("fs");

app = express();
cron.schedule("0,30 * * * * *", function() {
  var date = new Date();
  console.log("what is current time: ", date.toLocaleTimeString());
});

app.listen(3128);
