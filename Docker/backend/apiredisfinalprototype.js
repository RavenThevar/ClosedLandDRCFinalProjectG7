const { Console } = require("console");
const https = require("https");
const Redis = require("ioredis");
const redis = new Redis(6379, "172.18.0.2");

// Function Starts
const MeatGrinder = async function () {
  let offsetty = 0;
  let ety = 0;

  // Reading a Key Element of the Redis Hash
  let keysCount = await redis.hlen("collectionHash");
  console.log(
    `Current Key Count in collectionHash is ${keysCount} keys/messages`
  );
  // End

  for (let b = 0; b < 1000; b++) {
    https.get(
      `https://api.opensea.io/api/v1/collections?offset=${offsetty}&limit=300`,
      (resp) => {
        let data = "";

        // A chunk of data has been received.
        resp.on("data", (chunk) => {
          data += chunk;
        });

        // The whole response has been received.
        resp.on("end", () => {
          let objData = JSON.parse(data);

          // A check to see if objData has any data in it.
          if (objData.collections == undefined) {
            console.log("#:", ety, "NO DATA DISCOVERED");
            new Promise((r) => setTimeout(r, 2000));
            ety++;
            return 0;
          }

          // Start of Loop into 300 collections per API call
          for (let i = 0; i < 300; i++) {
            redis.sadd("collectionName", objData.collections[i].slug);
            redis.hmset(
              objData.collections[i].slug,
              "Name",
              objData.collections[i].name,
              "Date",
              objData.collections[i].created_date,
              "ShortDesc",
              objData.collections[i].short_description,
              "Desc",
              objData.collections[i].description,
              "ExtUrl",
              objData.collections[i].external_url,
              "BannerImgUrl",
              objData.collections[i].banner_image_url,
              "FeaturedImgUrl",
              objData.collections[i].featured_image_url,
              "ImgUrl",
              objData.collections[i].image_url,
              "LargeImgUrl",
              objData.collections[i].large_image_url,
              "DiscordUrl",
              objData.collections[i].discord_url,
              "TelegramUrl",
              objData.collections[i].telegram_url,
              "WikiUrl",
              objData.collections[i].wiki_url,
              "MediumUsername",
              objData.collections[i].medium_username,
              "TwitterUsername",
              objData.collections[i].twitter_username,
              "InstagramUsername",
              objData.collections[i].instagram_username,
              "StatsOneDayVol",
              objData.collections[i].stats[one_day_volume],
              "StatsOneDayChg",
              objData.collections[i].stats[one_day_change],
              "StatsOneDaySale",
              objData.collections[i].stats[one_day_sales],
              "StatsOneDayAvgPrice",
              objData.collections[i].stats[one_day_average_price],
              "StatsSevenDayVol",
              objData.collections[i].stats[seven_day_volume],
              "StatsSevenDayChg",
              objData.collections[i].stats[seven_day_change],
              "StatsSevenDaySale",
              objData.collections[i].stats[seven_day_sales],
              "StatsSevenDayAvgPrice",
              objData.collections[i].stats[seven_day_average_price],
              "StatsThirtyDayVol",
              objData.collections[i].stats[thirty_day_volume],
              "StatsThirtyDayChange",
              objData.collections[i].stats[thirty_day_change],
              "StatsThirtyDaySale",
              objData.collections[i].stats[thirty_day_sales],
              "StatsThirtyDayAvgPrice",
              objData.collections[i].stats[thirty_day_average_price],
              "StatsTotalVolume",
              objData.collections[i].stats[total_volume],
              "StatsTotalSale",
              objData.collections[i].stats[total_sales],
              "StatsTotalSupply",
              objData.collections[i].stats[total_supply],
              "StatsCount",
              objData.collections[i].stats[count],
              "StatsNumOwners",
              objData.collections[i].stats[num_owners],
              "StatsAvgPrice",
              objData.collections[i].stats[average_price],
              "StatsNumReports",
              objData.collections[i].stats[num_reports],
              "StatsMarketCap",
              objData.collections[i].stats[market_cap],
              "StatsFloorPrice",
              objData.collections[i].stats[floor_price]
            );
          }
          // End Of Loop

          offsetty += 300;
          // Reading Offset Value
          console.log("Offset Value is: ", offsetty);
          // End

          // Exiting the Process once certain count is reached
          if (offsetty >= 290000) {
            console.log("Ending Sniffer now...");
            process.exit(0);
          }
          // End
        });
      }
    );
  }
};
// MeatGrinder Function ENDS //
MeatGrinder();
