const { Stats } = require("fs");
const https = require("https");

https
  .get(
    //"https://api.opensea.io/api/v1/collection/doodles-official/stats",
    //"https://api.opensea.io/api/v1/collection",
    //"https://api.opensea.io/api/v1/collection/doodles-official",
    "https://api.opensea.io/api/v1/collections?limit=300",
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
        //console.log(Object.keys(objData.collections[18]));
        //console.log(Object.keys(objData));
        for (i = 0; i < 300; i++) {
          //   console.log(
          //     objData.collections[i].name +
          //       " ======> " +
          //       objData.collections[i].stats.one_day_volume
          //   );
          let rubbles = objData.collections[i].stats.one_day_volume;
          console.log(rubbles[2]);
        }
      });
    }
  )
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
