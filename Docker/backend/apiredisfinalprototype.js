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
    `Current Key Count in collectionHash is ${keysCount} keys/messages`
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
          if (objData.collections == undefined) {
            console.log("NO DATA");
            //sleep(2);
            // await new Promise((r) => setTimeout(r, 2000));
            return 0;
          }
          for (let i = 0; i < 300; i++) {
            // if (objData.collections[i].slug == undefined) {
            //   objData.collections[i].slug = 0;
            // }
            // } else if (objData.collections[i].name === undefined) {
            //   objData.collections[i].name = 0;
            // } else if (objData.collections[i].created_date === undefined) {
            //   objData.collections[i].created_date = 0;
            // } else if (objData.collections[i].short_description === undefined) {
            //   objData.collections[i].short_description = 0;
            // } else if (objData.collections[i].description === undefined) {
            //   objData.collections[i].description = 0;
            // } else if (objData.collections[i].external_url === undefined) {
            //   objData.collections[i].external_url = 0;
            // } else if (objData.collections[i].banner_image_url === undefined) {
            //   objData.collections[i].banner_image_url = 0;
            // } else if (
            //   objData.collections[i].featured_image_url === undefined
            // ) {
            //   objData.collections[i].featured_image_url = 0;
            // } else if (objData.collections[i].image_url === undefined) {
            //   objData.collections[i].image_url = 0;
            // } else if (objData.collections[i].large_image_url === undefined) {
            //   objData.collections[i].large_image_url = 0;
            // } else if (objData.collections[i].discord_url === undefined) {
            //   objData.collections[i].discord_url = 0;
            // } else if (objData.collections[i].telegram_url === undefined) {
            //   objData.collections[i].telegram_url = 0;
            // } else if (objData.collections[i].wiki_url) {
            //   objData.collections[i].wiki_url = 0;
            // } else if (objData.collections[i].medium_username === undefined) {
            //   objData.collections[i].medium_username = 0;
            // } else if (objData.collections[i].twitter_username === undefined) {
            //   objData.collections[i].twitter_username = 0;
            // } else if (
            //   objData.collections[i].instagram_username === undefined
            // ) {
            //   objData.collections[i].instagram_username = 0;
            // } else if (
            //   objData.collections[i].stats[one_day_volume] === undefined
            // ) {
            //   objData.collections[i].stats[one_day_volume] = 0;
            // } else if (
            //   objData.collections[i].stats[one_day_change] === undefined
            // ) {
            //   objData.collections[i].stats[one_day_change] = 0;
            // } else if (
            //   objData.collections[i].stats[one_day_sales] === undefined
            // ) {
            //   objData.collections[i].stats[one_day_sales] = 0;
            // } else if (
            //   objData.collections[i].stats[one_day_average_price] === undefined
            // ) {
            //   objData.collections[i].stats[one_day_average_price] = 0;
            // } else if (
            //   objData.collections[i].stats[seven_day_volume] === undefined
            // ) {
            //   objData.collections[i].stats[seven_day_volume] = 0;
            // } else if (
            //   objData.collections[i].stats[seven_day_change] === undefined
            // ) {
            //   objData.collections[i].stats[seven_day_change] = 0;
            // } else if (
            //   objData.collections[i].stats[seven_day_sales] === undefined
            // ) {
            //   objData.collections[i].stats[seven_day_sales] = 0;
            // } else if (
            //   objData.collections[i].stats[seven_day_average_price] ===
            //   undefined
            // ) {
            //   objData.collections[i].stats[seven_day_average_price] = 0;
            // } else if (
            //   objData.collections[i].stats[thirty_day_volume] === undefined
            // ) {
            //   objData.collections[i].stats[thirty_day_volume] = 0;
            // } else if (
            //   objData.collections[i].stats[thirty_day_change] === undefined
            // ) {
            //   objData.collections[i].stats[thirty_day_change] = 0;
            // } else if (
            //   objData.collections[i].stats[thirty_day_sales] === undefined
            // ) {
            //   objData.collections[i].stats[thirty_day_sales] = 0;
            // } else if (
            //   objData.collections[i].stats[thirty_day_average_price] ===
            //   undefined
            // ) {
            //   objData.collections[i].stats[thirty_day_average_price] = 0;
            // } else if (
            //   objData.collections[i].stats[total_volume] === undefined
            // ) {
            //   objData.collections[i].stats[total_volume] = 0;
            // } else if (
            //   objData.collections[i].stats[total_sales] === undefined
            // ) {
            //   objData.collections[i].stats[total_sales] = 0;
            // } else if (
            //   objData.collections[i].stats[total_supply] === undefined
            // ) {
            //   objData.collections[i].stats[total_supply] = 0;
            // } else if (objData.collections[i].stats[count] === undefined) {
            //   objData.collections[i].stats[count] = 0;
            // } else if (objData.collections[i].stats[num_owners] === undefined) {
            //   objData.collections[i].stats[num_owners] = 0;
            // } else if (
            //   objData.collections[i].stats[average_price] === undefined
            // ) {
            //   objData.collections[i].stats[average_price] = 0;
            // } else if (
            //   objData.collections[i].stats[num_reports] === undefined
            // ) {
            //   objData.collections[i].stats[num_reports] = 0;
            // } else if (objData.collections[i].stats[market_cap] === undefined) {
            //   objData.collections[i].stats[market_cap] = 0;
            // } else if (
            //   objData.collections[i].stats[floor_price] === undefined
            // ) {
            //   objData.collections[i].stats[floor_price] = 0;
            // } else {
            //   redis.hmset();
            // }
            // //];
            // // undefinedCheck[k];
            // // console.log(undefinedCheck[5]);
            // // if (undefinedCheck[i] === undefined) {
            // //   undefinedCheck[i] = 0;
            // // }

            // redis.hset(
            //   objData.collections[i].slug,
            //   "Name",
            //   objData.collections[i].name,
            //   "Date_Created",
            //   objData.collections[i].created_date,
            //   "Short Description",
            //   objData.collections[i].short_description
            // );

            redis.hmset(
              "collectionHash",
              objData.collections[i].slug,
              objData.collections[i].created_date
            );
          }
          // End Of Loop

          offsetty += 300;
          // Reading Offset Value
          console.log("Offset Value is: ", offsetty);
          //
          // Exiting the Process once certain count is reached
          if (offsetty === 300000) {
            process.exit(0);
          }
          //
        });
      }
    );
  }
};
// Function ENDS /

MeatGrinder();
