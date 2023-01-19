const express = require("express");
const setupRoutes = require("./routes/setup.js");

const app = express();
const startup = async () => {
  const port = 3002;

  setupRoutes(app);

  app.listen(port, () => {
    console.log(`[SERVER]: Server is running at http://localhost:${port}`);
  });
};

startup();
