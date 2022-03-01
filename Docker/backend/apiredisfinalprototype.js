const { Console } = require("console");
const https = require("https");
const Redis = require("ioredis");
const redis = new Redis(6379, "172.18.0.2");

// Function Starts
const MeatGrinder = async function () {
  let offsetty = 0;

  // Reading a Key Element of the Redis Hash
  let keysCount = await redis.hlen("collectionHash");
  console.log(
    `current key count in collectionHash is ${keysCount} keys/messages`
  );
  //

  for (b = 0; b < 1000; b++) {
    https.get(
      `https://api.opensea.io/api/v1/collections?offset=${offsetty}&limit=300`,
      (resp) => {
        let data = "";

        // A chunk of data has been received.
        resp.on("data", (chunk) => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          let objData = JSON.parse(data);

          for (let i = 0; i < 300; i++) {
            // let myKey = objData.collections[i].slug;
            // let myValue = objData.collections[i];
            if (
              objData.collections[i].slug !== undefined &&
              objData.collections[i]
            ) {
              redis.hset(
                "collectionHash",
                objData.collections[i].slug,
                objData.collections[i]
              );
              console.log("#: " + i);
              console.log("myKey: " + objData.collections[i].slug);
              console.log("myValue: " + objData.collections[i]);
            } else {
              console.log("Skipping undefined value...");
            }
          }
          offsetty += 300;
          // Reading Offset Value
          console.log("Offset Value is: ", offsetty);
          //
          // Exiting the Process after certain count
          if (offsetty === 300000) {
            process.exit(0);
          }
          //
        });
      }
    );
  }
};
// Function ENDS

MeatGrinder();
