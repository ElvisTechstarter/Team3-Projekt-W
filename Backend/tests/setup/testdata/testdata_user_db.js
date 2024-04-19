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
    userId: 1,
    user_history_entry: "",
  },
  {
    userId: 2,
    user_history_entry: "peach",
  },
  {
    userId: 2,
    user_history_entry: "Apfel",
  },
  {
    userId: 2,
    user_history_entry: "Birne",
  },
  {
    userId: 2,
    user_history_entry: "rubbish",
  },
];

module.exports = { testdata_users, testdata_user_history };
