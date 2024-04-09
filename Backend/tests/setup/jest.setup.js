require("../../server");
const jeddebook_de_en = require("../../database/models/jeddebook_de_en");
const dbSequelize = require("../../database/setup/database");
const TestData_en_de = require("./testdata/Testdata_en_de");

module.exports = async () => {
  try {
    //console.log("inhalt von process.env", process.env);
    //await dbSequelize.dropSchema("de_ens");
    /* dbSequelize.dropSchema("de_ens").then(() => {
      dbSequelize.sync();
    }); */
    await dbSequelize.dropSchema("de_ens");
    await dbSequelize.sync();

    // DB mit Daten füllen, um DB auf Test Szenarien vorzubereiten
    await jeddebook_de_en.bulkCreate(TestData_en_de);
    console.log("Test DB init");
  } catch (e) {
    console.error("MY DB Issue", e);
  }
};
