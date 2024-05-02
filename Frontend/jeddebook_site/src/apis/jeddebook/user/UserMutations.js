import api from "../setup/api";

async function registerUser(newUserBody) {
  const result = await api.post("/v1/user/register", newUserBody);
  return result;
}

export default { registerUser };
