const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const jeddebook_de_en = require("../../database/models/jeddebook_de_en");
const user_db = require("../../database/models/user_db");
const { Op } = require("sequelize"); // Import the Op object

const JeddebookRouter = Router();

// GET REQUESTS

JeddebookRouter.get("/all", async (req, res) => {
  const DE_EN_entries = await jeddebook_de_en.findAll();
  res.status(StatusCodes.OK).send(DE_EN_entries);
});

JeddebookRouter.get("/byEntry", async (req, res) => {
  console.log(req.params, req.query);
  const searchQuery = req.query.query; // Extract the actual search term
  console.log(searchQuery);
  try {
    if (!searchQuery) {
      // Handle the case when the query is empty
      res.status(StatusCodes.BAD_REQUEST).send("Empty query");
      return;
    }

    const DE_EN_entry = await jeddebook_de_en.findOne({
      where: {
        [Op.or]: [{ de_entry: searchQuery }, { en_entry: searchQuery }],
      },
    });

    if (DE_EN_entry) {
      res.status(StatusCodes.OK).send(DE_EN_entry);
    } else {
      res.status(StatusCodes.NOT_FOUND).send("Eintrag nicht gefunden");
    }
  } catch (error) {
    // Handle any other errors
    console.error("Error querying the database:", error.message);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Internal server error");
  }
});

// POST REQUESTS
JeddebookRouter.post("/byEntry", async (req, res) => {
  //Extract data from req
  console.log(req.body);
  const searchQuery = req.body.params.query;
  const userID = req.body.params.user;
  console.log(searchQuery, userID);

  try {
    if (!searchQuery) {
      // Handle the case when the query is empty
      res.status(StatusCodes.BAD_REQUEST).send("Empty query");
      return;
    }

    const DE_EN_entry = await jeddebook_de_en.findOne({
      where: {
        [Op.or]: [{ de_entry: searchQuery }, { en_entry: searchQuery }],
      },
    });

    console.log("Received userID:", userID);

    const userProfile = await user_db.findOne({ where: { id: userID } });
    if (userProfile) userProfile.user_history.push(searchQuery);
    console.log(
      "Adding ",
      searchQuery,
      " to userID= ",
      userID,
      " successfull!"
    );

    if (DE_EN_entry) {
      res.status(StatusCodes.OK).send(DE_EN_entry);
    } else {
      res.status(StatusCodes.NOT_FOUND).send("Eintrag nicht gefunden");
    }
  } catch (error) {
    // Handle any other errors
    console.error("Error querying the database:", error.message);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Internal server error");
  }
});

module.exports = { JeddebookRouter: JeddebookRouter };
