const express = require("express");
const App = express();
const Redis = require("ioredis");
const redis = new Redis(6379, "redis");
const cors = require("cors");

App.use(express.json());
App.use(cors());

let toBeSent = [];

App.post("", async (req, res) => {
  let collectionName = await redis.sort(
    "collectionName",
    "BY",
    "*->StatsOneDayChg",
    "LIMIT",
    "0",
    "10",
    "DESC"
  );

  for (i = 0; i < 10; i++) {
    toBeSent[i] = await redis.hgetall(`${collectionName[i]}`);
  }
  res.send(toBeSent);
});

App.listen(4568, () => {
  console.log(`Server Listening at http://10.5.0.4:4568/`);
});
