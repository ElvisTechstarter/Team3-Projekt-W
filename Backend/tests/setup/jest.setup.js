require("../../server");
const jeddebook_de_en = require("../../database/models/jeddebook_de_en");
const { user_db, user_history } = require("../../database/models/user_db");
const dbSequelize = require("../../database/setup/database");
const TestData_en_de = require("./testdata/Testdata_en_de");
const testdata_user_db = require("./testdata/testdata_user_db");

module.exports = async () => {
  try {
    // console.log("inhalt von process.env", process.env);
    // await dbSequelize.dropSchema("de_ens");
    // dbSequelize.dropSchema("de_ens").then(() => {
    //   dbSequelize.sync();
    // });
    //await dbSequelize.dropSchema("de_ens");
    //await dbSequelize.dropSchema("users");
    await dbSequelize.sync({ force: true });
    await dbSequelize.sync();

    // DB mit Daten füllen, um DB auf Test Szenarien vorzubereiten
    const dict = {};
    TestData_en_de.forEach((entry) => {
      dict[entry.en_entry] = entry.de_entry;
    });
    const reversedData = Object.entries(dict).map(([en_entry, de_entry]) => ({
      en_entry,
      de_entry,
    }));

    await jeddebook_de_en.bulkCreate(reversedData);
    await user_db.bulkCreate(testdata_user_db.testdata_users);
    await user_history.bulkCreate(testdata_user_db.testdata_user_history);
    console.log("Test DB init");
  } catch (e) {
    console.error("MY DB Issue", e);
  }
};
