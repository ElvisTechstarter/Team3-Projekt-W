const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { user_db, user_history } = require("../../database/models/user_db");
const UserRouter = Router();
const AccessTokens = require("../../services/auth/AccessToken");
const authMiddleWare = require("../../middlewares/authMiddleware");

//  ***GET REQUESTS***
//Return all profiles
UserRouter.get("/profile/all", async (req, res) => {
  const allProfiles = await user_db.findAll();

  res.status(StatusCodes.OK).json({ profiles: allProfiles });
});

UserRouter.get("/currentuser", authMiddleWare, async (req, res) => {
  try {
    if (!req.user.userId) {
      res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.NOT_FOUND);
      return;
    }
    const userId = req.user.userId;

    console.log("userId", userId);

    const user = await user_db.findOne({ where: { id: userId } });

    if (!user) {
      res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
      return;
    }

    res.status(StatusCodes.OK).json({ user });
  } catch (error) {
    console.error("Error in /currentuser route:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

//Return the user history
UserRouter.get("/profile/userhistory", async (req, res) => {
  try {
    //console.log(req.query);
    queryid = req.query.userid;
    //console.log("Userid=", queryid);
    // Retrieve user history entries in descending order of creation date
    const userHistoryEntries = await user_history.findAll({
      where: { userId: queryid },
      attributes: ["user_history_entry"],
      limit: 6,
      order: [["createdAt", "DESC"]], // Order by createdAt in descending order
    });
    //console.log(userHistoryEntries);
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
  if (!newUserMail || !newUserPW || !newUserName) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }

  const newUser = {
    user_name: newUserName,
    user_mail: newUserMail,
    user_pw: newUserPW,
  };

  const users = await user_db.create(newUser);

  res.status(StatusCodes.OK).json({ users: users });
});
// POST-Anfrage für Benutzeranmeldung
UserRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    console.log(req.body, username, password);
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }

  try {
    // Überprüfen, ob der Benutzer in der Datenbank vorhanden ist
    const user = await user_db.findOne({
      where: { user_name: username, user_pw: password },
    });

    if (!user) {
      // Wenn der Benutzer nicht gefunden wurde, sende eine Fehlermeldung zurück
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Invalid username or password" });
    }

    //Erstelle ein Token, da user mit pw gefunden wurde
    const myToken = AccessTokens.createAccessToken(user.id);

    // Wenn der Benutzer gefunden wurde, sende eine Erfolgsmeldung zurück
    res.status(StatusCodes.OK).json({
      message: "Login successful",
      user: user,
      tokens: { AccessTokens: myToken },
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
  const { id } = req.body; //req.body.todoId

  await user_db.destroy({ where: { id: id } });

  res.status(StatusCodes.OK).json({ deletedId: id });
});

module.exports = { UserRouter };
