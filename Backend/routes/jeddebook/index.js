const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const jeddebook_de_en = require("../../database/models/jeddebook_de_en");

const JeddebookRouter = Router();

// GET REQUESTS

JeddebookRouter.get("/all", async (req, res) => {
  const DE_EN_entries = await jeddebook_de_en.findAll();
  res.status(StatusCodes.OK).send(DE_EN_entries);
});

module.exports = { JeddebookRouter: JeddebookRouter };
