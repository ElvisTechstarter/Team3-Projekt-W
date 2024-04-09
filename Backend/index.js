const dbSequelize = require("./database/setup/database");

const express = require("express");
const cors = require("cors");

const { PORT } = process.env;
const app = express();

//Datenbank statt beispielset verwenden
dbSequelize
  .sync()
  .then(() => {
    console.log("DB has been successfully initialized");
  })
  .catch((e) => {
    console.log(e);
  });

//Logged in der console die Portnumber
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
