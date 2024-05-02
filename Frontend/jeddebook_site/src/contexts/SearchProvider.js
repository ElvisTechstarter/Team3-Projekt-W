import React, { createContext, useState, useContext } from "react";
import AuthContext from "./AuthProvider";
import { SearchMutations, SearchQueries } from "../apis/jeddebook/search";

const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState(null);
  const [response, setResponse] = useState(null);
  const { isLoggedIn, userID, setUserHistory } = useContext(AuthContext);

  const handleSearch = async (input) => {
    if (input === "") return;
    setQuery(input);
    try {
      if (isLoggedIn === false) {
        // Sende die Daten an deinen Express-Server
        const params = { query: input };
        const response = await SearchQueries.getSearchResults(params);
        //console.log(response);
        setResponse(response);
      } else {
        const body = { query: input, user: userID };
        const response = await SearchMutations.postSearchResults(body);
        //console.log(response);
        setResponse(response);
        setUserHistory(response.data.userHistoryEntries);
      }
    } catch (error) {
      setResponse(undefined);
      console.error("Fehler bei der Anfrage:", error.message);
    }
  };

  const handleSuggestions = async (inputValue, setSuggestions) => {
    if (inputValue < 2) return;
    try {
      const params = { query: inputValue };
      const response = await SearchQueries.getSuggestions(params);
      if (response) {
        //console.log(response);
        let tmp = [];
        response.data.forEach((element) => {
          tmp.push(element.entry);
        });
        //console.log(tmp);
        setSuggestions(tmp);
      }
    } catch (error) {
      setResponse(undefined);
      console.error("Fehler bei der Anfrage:", error.message);
    }
  };

  return (
    <SearchContext.Provider
      value={{ response, handleSearch, handleSuggestions, query }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
