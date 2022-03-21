const https = require("https");
const IORedis = require("ioredis");
const redis = new IORedis();
const mtov = [];
const ltov = [];
let j = 0;
let offsetty = 0;

const apicall = async function () {
  const channel = "ioredis_channel";
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
        resp.on("end", () => {
          let objData = JSON.parse(data);
          // for (i = 0; i < 300; i++) {
          //   if (objData.collections[i].stats.one_day_volume != 0) {
          //     mtov[j] = objData.collections[i].stats.one_day_volume;
          //     // console.log("MTOV VALUE HERE" + mtov[j]);
          //   } else {
          //     ltov[j] = objData.collections[i].slug;
          //   }
          // }
          // console.log("The value of J after is: " + j);
          // console.log("The Offsetty Value after is: " + offsetty);

          for (i = 0; i < 300; i++) {
            ltov[j] = objData.collections[i].slug;
            j++;
          }
          offsetty += 300;
          console.log("0 value is: " + ltov[269000]);
          console.log("1 value is: " + ltov[275000]);
          console.log("2 value is: " + ltov[275100]);
          console.log("3 value is: " + ltov[275600]);
          console.log("4 value is: " + ltov[275700]);
          console.log("5 value is: " + ltov[275800]);
          console.log("6 value is: " + ltov[275900]);
        });
      }
    )
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
};

for (v = 0; v < 1000; v++) {
  apicall();
}
