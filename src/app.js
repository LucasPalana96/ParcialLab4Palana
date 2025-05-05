const { envs } = require("./config/env");
const { createServer } = require("./service/service");

const main = () => {
  createServer(envs);
};

(async () => {
  main();
})();
