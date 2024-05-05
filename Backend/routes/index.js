const { Router } = require("express");
const { JeddebookRouter } = require("./jeddebook");
const { UserRouter } = require("./user");
const { AuthRouter } = require("./auth");
const authMiddleWare = require("../middlewares/authMiddleware");

const AppRouter = Router();

AppRouter.use("/jeddebook", JeddebookRouter);
AppRouter.use("/user", authMiddleWare, UserRouter);
AppRouter.use("/auth", AuthRouter);

module.exports = { AppRouter };
