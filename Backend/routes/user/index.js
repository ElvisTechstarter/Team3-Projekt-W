const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { user_db, user_history } = require("../../database/models/user_db");
const moment = require("moment");
const Utils = require("../../helpers/utils"); // assuming Utils is a file where generateJWT and sendResponse functions are defined
const UserRouter = Router();

// ***GET REQUESTS***
// Return all profiles
UserRouter.get("/profile/all", async (req, res) => {
  const allProfiles = await user_db.findAll();
  res.status(StatusCodes.OK).json({ profiles: allProfiles });
});

// Return the user history
UserRouter.get("/profile/userhistory", async (req, res) => {
  try {
    const queryid = req.query.userid;
    const userHistoryEntries = await user_history.findAll({
      where: { userId: queryid },
      attributes: ["user_history_entry"],
      limit: 5,
      order: [["createdAt", "DESC"]],
    });
    res.status(StatusCodes.OK).json({ userHistoryEntries });
  } catch (error) {
    console.error("Error querying the database:", error.message);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Internal server error");
  }
});

// Return profile from a specific user
UserRouter.get("/profile", async (req, res) => {
  const id = parseInt(req.query.id);
  if (!id) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }
  const userProfile = await user_db.findAll({ where: { id } });
  res.status(StatusCodes.OK).json({ profile: userProfile });
});

// POST REQUESTS
UserRouter.post("/register", async (req, res) => {
  const { newUserName, newUserMail, newUserPW } = req.body;
  const newUser = {
    user_name: newUserName,
    user_mail: newUserMail,
    user_pw: newUserPW,
  };
  const users = await user_db.create(newUser);
  res.status(StatusCodes.OK).json({ users: users });
});

// POST request for user login
UserRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await user_db.findOne({
      where: { user_name: username, user_pw: password },
    });
    if (!user) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Invalid username or password" });
    }
    const token = Utils.generateJWT(user);
    const refreshExpiry = moment()
      .utc()
      .add(3, "days")
      .endOf("day")
      .format("X");
    const refreshtoken = Utils.generateJWT({
      exp: parseInt(refreshExpiry),
      data: user._id,
    });
    delete user.password;
    return Response.sendResponse({
      res,
      responseBody: { user: user, token, refresh: refreshtoken },
      message: "Login successful",
    });
  } catch (error) {
    console.error("Error:", error.message);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "An error occurred" });
  }
});

// DELETE REQUEST
UserRouter.delete("/delete", async (req, res) => {
  const { id } = req.body;
  await user_db.destroy({ where: { id: id } });
  res.status(StatusCodes.OK).json({ deletedId: id });
});

module.exports = { UserRouter };
