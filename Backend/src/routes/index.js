const { Router } = require("express");
const { JeddebookRouter } = require("./jeddebook");
const { UserRouter } = require("./user");
const { AuthRouter } = require("./auth");
const AppRouter = Router();

AppRouter.use("/jeddebook", JeddebookRouter);
AppRouter.use("/user", UserRouter);
AppRouter.use("/auth", AuthRouter);

module.exports = { AppRouter };
