const https = require("https");

let apicall = async () => {
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
          }
        });
      }
    )
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
};

logincall();
