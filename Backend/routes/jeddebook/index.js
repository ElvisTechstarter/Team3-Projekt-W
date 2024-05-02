const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const jeddebook_de_en = require("../../database/models/jeddebook_de_en");
const { user_db, user_history } = require("../../database/models/user_db");
const { Op } = require("sequelize"); // Import the Op object

const JeddebookRouter = Router();

//function to add entry
async function addHistoryEntry(userID, searchQuery) {
  try {
    const user = await user_db.findOne({
      where: { id: userID },
    });

    if (user) {
      await user_history.create({
        userId: user.id,
        user_history_entry: searchQuery,
      });
      //console.log("User history entry created successfully!");
    } else {
      //console.log("User not found. Unable to create history entry.");
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// GET REQUESTS

JeddebookRouter.get("/all", async (req, res) => {
  const DE_EN_entries = await jeddebook_de_en.findAll();
  res.status(StatusCodes.OK).send(DE_EN_entries);
});

// Assuming you have a database model for suggestions (jeddebook_de_en) and a Sequelize instance (sequelize) set up

// Modify the "/suggestions" route to fetch relevant suggestions based on user input
JeddebookRouter.get("/suggestions", async (req, res) => {
  const searchQuery = req.query.query;

  try {
    if (!searchQuery) {
      // Handle the case when the query is empty
      res.status(StatusCodes.BAD_REQUEST).send("Empty query");
      return;
    }

    // Fetch suggestions based on the query (e.g., partially matching entries)
    const suggestions = await jeddebook_de_en.findAll({
      attributes: ["de_entry", "en_entry"], // Only select de_entry and en_entry
      where: {
        [Op.or]: [
          { de_entry: { [Op.like]: `%${searchQuery}%` } },
          { en_entry: { [Op.like]: `%${searchQuery}%` } },
        ],
      },
    });

    // Extract the relevant entry (either de_entry or en_entry) from each suggestion
    const formattedSuggestions = suggestions.map((suggestion) => {
      if (suggestion.de_entry && suggestion.en_entry) {
        // Both entries exist, choose one based on preference (e.g., prioritize de_entry)
        return { entry: suggestion.de_entry };
      } else if (suggestion.de_entry) {
        return { entry: suggestion.de_entry };
      } else if (suggestion.en_entry) {
        return { entry: suggestion.en_entry };
      }
      return null; // No valid entry found
    });

    // Filter out null entries (if any)
    const filteredSuggestions = formattedSuggestions.filter(
      (entry) => entry !== null
    );

    res.status(StatusCodes.OK).json(filteredSuggestions.slice(0, 10));
  } catch (error) {
    console.error("Error fetching suggestions:", error.message);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Internal server error");
  }
});

JeddebookRouter.get("/byEntry", async (req, res) => {
  //Extract the searchterm
  const searchQuery = req.query.query;
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

    //change format so its same as POST-request
    const combinedResult = {
      DE_EN_entry: DE_EN_entry,
    };

    if (DE_EN_entry) {
      res.status(StatusCodes.OK).send(combinedResult);
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
  //Extract the searchterm and userID

  const searchQuery = req.body.query;
  const userID = req.body.user;

  try {
    if (!searchQuery) {
      // Handle the case when the query is empty
      res.status(StatusCodes.BAD_REQUEST).send("Empty query");
      return;
    }

    // Search the database for the query
    // Add the history entry first
    await addHistoryEntry(userID, searchQuery);

    // Retrieve user history entries in descending order of creation date
    const userHistoryEntriesPromise = user_history.findAll({
      where: { userId: userID },
      attributes: ["user_history_entry"],
      limit: 6,
      order: [["createdAt", "DESC"]], // Order by createdAt in descending order
    });

    // Search the database for the query
    const DE_EN_entryPromise = jeddebook_de_en.findOne({
      where: {
        [Op.or]: [{ de_entry: searchQuery }, { en_entry: searchQuery }],
      },
    });

    const [userHistoryEntries, DE_EN_entry] = await Promise.all([
      userHistoryEntriesPromise,
      DE_EN_entryPromise,
    ]);

    const combinedResult = {
      DE_EN_entry: DE_EN_entry,
      userHistoryEntries: userHistoryEntries,
    };

    // Send the response back
    if (combinedResult) {
      // DE_EN_entry.user_history = userHistoryEntries.dataValues;
      res.status(StatusCodes.OK).send(combinedResult);
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
