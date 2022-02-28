const { Console } = require("console");
const https = require("https");
const Redis = require("ioredis");
const redis = new Redis(6379, "172.18.0.2");

const MeatGrinder = async function () {
  let messageCount = await redis.hlen("collectionHash");
  console.log(
    `current message count in collectionHash is ${messageCount} messages`
  );

  // Reading a Key Element of the Redis Hash
  let keysCount = await redis.hkeys("collectionHash");
  console.log(
    `current key count in collectionHash is ${keysCount[235]} messages`
  );

  https.get(
    `https://api.opensea.io/api/v1/collections?offset=0&limit=300`,
    (resp) => {
      let data = "";

      // A chunk of data has been received.
      resp.on("data", (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on("end", () => {
        let objData = JSON.parse(data);

        // for (let i = 0; i < 300; i++) {
        //   const myKey = objData.collections[i].slug;
        //   const myValue = objData.collections[i];
        //   redis.hmset("collectionHash", myKey, myValue);
        // }
        process.exit(0);
      });
    }
  );

  // for (let i = 0; i < messages.length; i++) {
  //   let msg = messages[i];
  //   msg = msg[1][0];
  //   console.log("reading message:", msg);
  // }
};

MeatGrinder();
