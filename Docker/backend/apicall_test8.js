const https = require("https");

let j = 0;
const mtov = [];
const ltov = [];
let offsetty = 0;

let apicall = async () => {
  for (h = 0; h < 100; h++) {
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

            for (i = 0; i < 300; i++) {
              if (objData.collections[i].stats.one_day_volume != 0) {
                mtov[j] = objData.collections[i].stats.one_day_volume;
              } else {
                //ltov[j] = objData.collections[i].stats.one_day_volume;
                ltov[j] = objData.collections[i].slug;
              }
              j++;
            }
            offsetty += 300;
            console.log("The value of J after is: " + j);
            console.log("The Offsetty Value after is: " + offsetty);
            console.log("The value of array at 57 is: " + ltov[57]);
            console.log("Array at 9999 is: " + ltov[9999]);
          });
          console.log(data);
        }
      )
      .on("error", (err) => {
        console.log("Error: " + err.message);
      });
  }
};

apicall();
