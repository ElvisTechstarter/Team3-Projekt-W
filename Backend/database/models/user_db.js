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
  }
);

// Define the UserHistory model
const user_history = dbSequelize.define("userHistory", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: user_db, // Referencing the users table
      key: "id", // Referencing the id column
    },
  },
  user_history_entry: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  // Add other tracked fields here (e.g., user_name, user_mail, etc.)
  // ...
});

//user_history.belongsTo(user_db, { foreignKey: "user_id" });

module.exports = { user_db, user_history };
