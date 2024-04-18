const testdata_users = [
  {
    user_name: "Max",
    user_mail: "max@mustermann.de",
    user_pw: "123",
  },
  {
    user_name: "Maria",
    user_mail: "maria@musterfrau.de",
    user_pw: "abc",
  },
];

const testdata_user_history = [
  {
    userId: 1, // Max's user ID
    user_history_entry: "", // No history for Max
  },
  {
    userId: 2, // Maria's user ID
    user_history_entry: "Apfel-apple, peach-Pfirsich", // Maria's history
  },
];

module.exports = { testdata_users, testdata_user_history };
