const { Router } = require("express");
const { StatusCodes } = require("http-status-codes");

const AuthRouter = Router();

AuthRouter.get("/login", (req, res) => {
  res.status(StatusCodes.OK).send("User Login");
});

AuthRouter.post("/register", (req, res) => {
  res.status(StatusCodes.OK).send("User registered");
});

AuthRouter.delete("/logout", (req, res) => {
  res.status(StatusCodes.OK).send("Logout");
});

module.exports = { AuthRouter };
