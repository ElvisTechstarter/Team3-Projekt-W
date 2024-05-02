const { Router } = require("express");
const { JeddebookRouter } = require("./jeddebook");
const { UserRouter } = require("./user");

const AppRouter = Router();

AppRouter.use("/jeddebook", JeddebookRouter);
AppRouter.use("/user", UserRouter);

module.exports = { AppRouter };
