const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {});

server.listen(PORT, console.log(`Listening on PORT ${PORT}`));

module.exports = server;

// const axios = require("axios");
// const https = require("https");
// const fetch = require("node-fetch");

// note that axios automatically parses the JSON
// in addition can make concurrent requests by passing an array of endpoints to axios.all();
// can use with Promise.all
// axios docs: https://github.com/axios/axios

// async function exampleFunction(parameter) {
//   try {
//     const firstResObj = await axios.get().then().catch();
//     const secondResObj = await axios.get().then().catch();
//     return secondResObj.data;
//   } catch {
//     console.log("Error in query to endpoint");
//   }
// }

// exampleFunction(argument);

// https
//   .get("endpoint", (res) => {
//     let data = "";

//     // chunk of data has been received
//     res.on("data", (chunk) => {
//       data += chunk;
//     });

//     // the entire response has been received
//     res.on("end", () => {
//       console.log(JSON.parse(data).exampleKey);
//     });
//   })
//   .on("error", (err) => {
//     console.log("Error: " + err.message);
//   });

// (async () => {
//   try {
//     const response = await fetch("endpoint");
//     const json = await response.json();
//     console.log(json);
//   } catch (err) {
//     console.log(err.response.body);
//   }
// })();
