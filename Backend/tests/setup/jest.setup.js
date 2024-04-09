require("../../src/server");
const WoerterbuchSequelize = require("../../src/database/setup/database");

module.exports = async () => {
  try {
    WoerterbuchSequelize.dropSchema("Jeddebook").then(() => {
      WoerterbuchSequelize.sync();
    });
    console.log("inhalt von process.env", process.env);
    await WoerterbuchSequelize.sync();
    await WoerterbuchSequelize.dropSchema("Todos");

    // DB mit Daten füllen, um DB auf Test Szenarien vorzubereiten
    await DE_EN_Beispiel_Model.create({
      id: 1,
      en_entry: "apple",
      de_entry: "Apfel",
    });
    await DE_EN_Beispiel_Model.create({
      id: 2,
      en_entry: "pear",
      de_entry: "Birne",
    });
    console.log("Test DB init");
  } catch (e) {
    console.error("MY DB Issue", e);
  }
};
