import http from "http";

import chalk from "chalk";
import express from "express";

import bootstrap from "./server/bootstrap";

const MAIN =
  async () => {
    const app = express();
    const server = http.Server(app);

    await bootstrap(app);

    server.listen(app.get("config").PORT || 3001,
      () => console.log(chalk.bold.green("Server listening on port: %d"), server.address().port));
  };

MAIN();
