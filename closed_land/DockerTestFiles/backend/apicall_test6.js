const https = require("https");

let j = 0;
const mtov = [];
const ltov = [];
let offsetty = 0;

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
          console.log("          ***************************************");
          console.log("          |  All Collections as the Following:  |");
          console.log("          ***************************************");
          console.log("The Offsetty Value = " + offsetty);
          console.log("The J Value = " + j);

          for (i = 0; i < 300; i++) {
            if (objData.collections[i].stats.one_day_volume != 0) {
              mtov[j] = objData.collections[i].stats.one_day_volume;
              console.log("Value Found Here.!");
              console.log(mtov);
            } else {
              //ltov[j] = objData.collections[i].stats.one_day_volume;
              ltov[j] = objData.collections[i].slug;
              console.log(ltov[j]);
            }
            j++;
          }

          offsetty += 300;
          //   delete chunk;
          //   delete data;
          //   delete objData;
        });
      }
    )
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
}
