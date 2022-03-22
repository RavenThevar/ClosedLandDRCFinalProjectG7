const https = require("https");

let j = 0;
const mtov = [];
let rollover = false;
let offsetty = 300;

while (rollover === false) {
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
          console.log("          ***************************************");
          console.log("          |  All Collections as the Following:  |");
          console.log("          ***************************************");

          for (i = 0; i < 300; i++) {
            if (objData.collections[i].stats.one_day_volume != 0) {
              mtov[j] = objData.collections[i].stats.one_day_volume;
              j++;
              console.log("added");
              console.log(mtov);
              rollover = true;
            }
          }
        });
      }
    )
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });

  offsetty += 300;
  data = 1;
  objData = 1;
}
