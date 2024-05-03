const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { user_db, user_history } = require("../../database/models/user_db");

const AuthRouter = Router();

// POST REQUESTS

AuthRouter.post("/login", async (req, res) => {
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

AuthRouter.post("/register", async (req, res) => {
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

module.exports = { AuthRouter };
