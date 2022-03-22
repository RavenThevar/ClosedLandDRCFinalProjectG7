const express = require("express");
const App = express();
const Redis = require("ioredis");
const redis = new Redis(6379, "10.5.0.15");
const cors = require("cors");

App.use(express.json());
App.use(cors());

let toBeSent = [];

App.post("", async (req, res) => {
  let collectionName = await redis.sort(
    "collectionName",
    "BY",
    "*->Name",
    "LIMIT",
    "0",
    "10",
    "ALPHA",
    "ASC"
  );

  for (i = 0; i < 10; i++) {
    toBeSent[i] = await redis.hgetall(`${collectionName[i]}`);
  }
  res.send(toBeSent);
});

App.listen(4566, () => {
  console.log(`Server Listening at http://10.5.0.4:4566/`);
});
