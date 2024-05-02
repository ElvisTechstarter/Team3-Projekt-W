import api from "../setup/api";

async function postSearchResults(newSearchParams) {
  const result = await api.post("/jeddebook/byEntry", newSearchParams);
  return result;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { postSearchResults };
