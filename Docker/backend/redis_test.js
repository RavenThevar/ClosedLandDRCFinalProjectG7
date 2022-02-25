const https = require("https");
const IORedis = require("ioredis");
const redis = new IORedis();
const mtov = [];
const ltov = [];
let j = 0;
let offsetty = 0;

const apicall = async function () {
  const channel = "ioredis_channel";
  let messageCount = await redis.xlen(channel);
  if (messageCount != 30) {
    throw Error("error");
  }
  https
    .get(
      `https://api.opensea.io/api/v1/collections?offset=${offsetty}&limit=300`,
      (resp) => {
        let data = "";

        // A chunk of data has been received.
        resp.on("data", (chunk) => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", async () => {
          let objData = JSON.parse(data);
          console.log(objData.collections[0]);
          console.log("\n---------------\nAdding\n");
          await redis.xadd(channel, "*", "KEY", "VAL");
          messageCount = await redis.xlen(channel);
          if (messageCount != 31) {
            throw Error("failed to add");
          }
        });
      }
    )
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
};

apicall();
