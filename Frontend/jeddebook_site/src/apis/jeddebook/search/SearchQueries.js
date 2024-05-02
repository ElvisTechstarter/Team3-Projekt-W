import api from "../setup/api";

async function getSearchResults(newSearchParams) {
  const result = await api.get("/jeddebook/byEntry", {
    params: newSearchParams,
  });
  return result;
}

async function getSuggestions(newSearchParams) {
  const result = await api.get("/jeddebook/suggestions", {
    params: newSearchParams,
  });
  return result;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getSearchResults, getSuggestions };
