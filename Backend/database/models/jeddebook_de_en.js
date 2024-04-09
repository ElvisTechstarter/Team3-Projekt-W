const { DataTypes } = require("sequelize");
const WoerterbuchSequelize = require("../setup/database");

// Define the jeddebook_de_en model

const jeddebook_de_en = WoerterbuchSequelize.define(
  "jeddebook_de_en",
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
  },
  { tableName: "jeddebook_de_en_table" }
);

module.exports = jeddebook_de_en;
