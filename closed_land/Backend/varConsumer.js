// 1st Method//
const dataR = async () => {
  try {
    const axios = require("axios");
    const res = await axios.get("http://10.5.0.4:4561/");
    const fil_data = res.data;
    console.log(fil_data);

    return fil_data;
  } catch (err) {
    console.log(err);
  }
};
dataR();

// 2nd Methods//
const http = require("http");
http.get(`http://provider:5454`, (resp) => {
  let data = "";

  // A chunk of data has been received.
  resp.on("data", (chunk) => {
    data += chunk;
  });

  // The whole response has been received.
  resp.on("end", () => {
    //let objData = JSON.stringify(data);
    let objData = data;
    console.log(objData);
  });
});
