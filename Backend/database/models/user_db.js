const { DataTypes } = require("sequelize");
const dbSequelize = require("../setup/database");

// Define the user_db model

const user_db = dbSequelize.define(
  //Schema name
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    user_pw: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    user_history: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  }
);

module.exports = user_db;
