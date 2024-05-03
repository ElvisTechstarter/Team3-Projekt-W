const { DataTypes } = require("sequelize");
const dbSequelize = require("../setup/database");

// Define the jeddebook_de_en model

const jeddebook_de_en = dbSequelize.define(
  //Schema name
  "de_en",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    de_entry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    en_entry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

module.exports = jeddebook_de_en;
