const http = require("http");
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
