const express = require("express");
const nofevicon = require("express-no-favicons");
const bodyParser = require("body-parser");

const logger = require("./loggers/index-logger");
const { port } = require("./config/config");

const app = express();
app.use(nofevicon());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/demo", (req, res) => {
  res.json({ str: "Server is Ready" });
  logger.info("path: /demo ");
});

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
