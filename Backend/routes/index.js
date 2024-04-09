const { Router } = require("express");
const { JeddebookRouter } = require("./jeddebook");

const AppRouter = Router();

AppRouter.use("/jeddebook", JeddebookRouter);

module.exports = { AppRouter };
