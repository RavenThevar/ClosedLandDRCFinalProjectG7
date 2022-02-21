const https = require("https");

let j = 0;
const mtov = [];
const ltov = [];
let offsetty = 3;

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
            // if (objData.collections[i].stats.one_day_volume != 0) {
            //   mtov[j] = objData.collections[i].stats.one_day_volume;
            //   // console.log("MTOV VALUE HERE" + mtov[j]);
            // } else {
            //   ltov[j] = objData.collections[i].slug;
            // }
            ltov[j] = objData.collections[i].slug;
            j++;
          }
          //offsetty += 300;
          // console.log("The value of J after is: " + j);
          // console.log("The Offsetty Value after is: " + offsetty);
          console.log("1 value is: " + ltov[45]);
          console.log("2 value is: " + ltov[567]);
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

for (v = 0; v < 100; v++) {
  apicall();
}
