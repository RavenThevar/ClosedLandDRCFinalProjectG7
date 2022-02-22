const Redis = require("ioredis");
const redis = new Redis();
const stream = redis.scanStream();

stream.on("data", (resultKeys) => {
  for (let i = 0; i < resultKeys.length; i++) {
    console.log(resultKeys[i]);
  }
});

stream.on("end", () => {
  console.log("All Streaming Channels have been visited");
});
