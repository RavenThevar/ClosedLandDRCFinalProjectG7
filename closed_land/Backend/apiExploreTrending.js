const express = require("express");
const App = express();
const Redis = require("ioredis");
const redis = new Redis(6379, "10.5.0.15");
const cors = require("cors");

App.use(express.json());
App.use(cors());

App.get("/1", async (req, res) => {
  let BannerImgUrl = await redis.sort(
    "collectionName",
    "BY",
    "*->StatsTotalSale",
    "LIMIT",
    "0",
    "9",
    "GET",
    "*->BannerImgUrl",
    "DESC"
  );
  res.send(BannerImgUrl);
});

App.get("/2", async (req, res) => {
  let ImgUrl = await redis.sort(
    "collectionName",
    "BY",
    "*->StatsTotalSale",
    "LIMIT",
    "0",
    "9",
    "GET",
    "*->ImgUrl",
    "DESC"
  );
  res.send(ImgUrl);
});

App.get("/3", async (req, res) => {
  let Name = await redis.sort(
    "collectionName",
    "BY",
    "*->StatsTotalSale",
    "LIMIT",
    "0",
    "9",
    "GET",
    "*->Name",
    "DESC"
  );
  res.send(Name);
});

App.get("/4", async (req, res) => {
  let Desc = await redis.sort(
    "collectionName",
    "BY",
    "*->StatsTotalSale",
    "LIMIT",
    "0",
    "9",
    "GET",
    "*->Desc",
    "DESC"
  );
  res.send(Desc);
});

App.get("/5", async (req, res) => {
  let StatsFloorPrice = await redis.sort(
    "collectionName",
    "BY",
    "*->StatsTotalSale",
    "LIMIT",
    "0",
    "9",
    "GET",
    "*->StatsFloorPrice",
    "DESC"
  );
  res.send(StatsFloorPrice);
});
App.get("/6", async (req, res) => {
  let StatsCount = await redis.sort(
    "collectionName",
    "BY",
    "*->StatsTotalSale",
    "LIMIT",
    "0",
    "9",
    "GET",
    "*->StatsCount",
    "DESC"
  );
  res.send(StatsCount);
});

App.listen(4561, () => {
  console.log(`Server Listening at http://10.5.0.4:4561/`);
});
