import api from "../setup/api";

async function registerUser(newUserBody) {
  const result = await api.post("/user/register", newUserBody);
  return result;
}

async function loginUser(newUserBody) {
  const result = await api.post("/user/login", newUserBody);
  return result;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { registerUser, loginUser };
