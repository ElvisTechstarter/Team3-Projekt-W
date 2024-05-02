import api from "../setup/api";

async function getUserHistory(newUserParams) {
  const result = await api.get("/user/profile/userhistory", {
    params: newUserParams,
  });
  return result;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getUserHistory };
