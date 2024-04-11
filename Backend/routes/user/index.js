const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const UserDB = require("../../database/models/user_db");
const user_db = require("../../database/models/user_db");

const UserRouter = Router();

//  ***GET REQUESTS***
//Return all profiles
UserRouter.get("/profile/all", async (req, res) => {
  const allProfiles = await user_db.findAll();

  res.status(StatusCodes.OK).json({ profiles: allProfiles });
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

// DELETE REQUEST
UserRouter.delete("/delete", async (req, res) => {
  const { id } = req.body; //req.body.todoId

  await user_db.destroy({ where: { id: id } });

  res.status(StatusCodes.OK).json({ deletedId: id });
});

module.exports = { UserRouter };
