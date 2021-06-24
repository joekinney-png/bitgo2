const http = require("http");
const https = require("https");
// const fetch = require("node-fetch");
// const axios = require("axios");

const PORT = 3000;

const server = http.createServer((req, res) => {});

// async function exampleFunction(parameter) {
//   try {
//     const firstResObj = await axios.get();
//     const secondResObj = await axios.get();
//     return secondResObj.data;
//   } catch {
//     console.log("Error in query to endpoint");
//   }
// }

// exampleFunction(argument);

server.listen(PORT, console.log(`Listening on PORT ${PORT}`));

module.exports = server;

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
