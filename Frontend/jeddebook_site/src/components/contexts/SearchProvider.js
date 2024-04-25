import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import AuthContext from "./AuthProvider";

const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState(null);
  const [response, setResponse] = useState(null);
  const { isLoggedIn, userID, setUserHistory } = useContext(AuthContext);

  const handleSearch = async (input) => {
    setQuery(input);
    if (input === "") return;
    try {
      if (isLoggedIn === false) {
        // Sende die Daten an deinen Express-Server
        const response = await axios.get(
          "http://localhost:5050/v1/jeddebook/byEntry",
          {
            params: { query: input },
          }
        );
        //console.log(response);
        setResponse(response);
      } else {
        const response = await axios.post(
          "http://localhost:5050/v1/jeddebook/byEntry",
          {
            params: { query: input, user: userID },
          }
        );
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
      const response = await axios.get(
        "http://localhost:5050/v1/jeddebook/suggestions",
        {
          params: { query: inputValue },
        }
      );
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
