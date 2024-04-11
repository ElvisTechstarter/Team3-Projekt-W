const { Router } = require("express");
const { JeddebookRouter } = require("./jeddebook");
const { AuthRouter } = require("./auth");
const { UserRouter } = require("./user");

const AppRouter = Router();

AppRouter.use("/jeddebook", JeddebookRouter);
AppRouter.use("/auth", AuthRouter);
AppRouter.use("/user", UserRouter);

module.exports = { AppRouter };
