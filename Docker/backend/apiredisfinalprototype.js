const { Console } = require("console");
const https = require("https");
const IORedis = require("ioredis");
const redis = new IORedis();

const lover = async function () {
  const channel = "ioredis_channel";
  let messageCount = await redis.xlen(channel);
  console.log(
    `current message count in channel ${channel} is ${messageCount} messages`
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
        console.log("\n----------------\nresponse end and received");
        5;

        for (let i = 0; i < 300; i++) {
          const myKey = objData.collections[i].slug;
          const myValue = objData.collections[i].slug;
          redis.xadd(channel, "*", myKey, myValue);
          console.log("MYKEY", myKey, "MYVALUE", myValue);
        }
      });
    }
  );

  messageCount = await redis.xlen(channel);
  console.log(
    `current message count in channel ${channel} is ${messageCount} messages`
  );
  // now you can see we have one new message

  // use xread to read all messages in channel
  let messages = await redis.xread(["STREAMS", channel, 0]);

  console.log(
    `reading messages from channel ${channel}, found ${messages.length} messages`
  );

  for (let i = 0; i < messages.length; i++) {
    let msg = messages[i];
    msg = msg[1][0];
    console.log("reading message:", msg);
  }
  process.exit(0);
};

lover();
