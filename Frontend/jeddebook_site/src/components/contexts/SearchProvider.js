import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import AuthContext from "./AuthProvider";

const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [response, setResponse] = useState(null);
  const { isLoggedIn, userID, setUserHistory } = useContext(AuthContext);

  const handleSearch = async (inputValue) => {
    if (inputValue === "") return;
    try {
      if (isLoggedIn === false) {
        // Sende die Daten an deinen Express-Server
        const response = await axios.get(
          "http://localhost:5050/v1/jeddebook/byEntry",
          {
            params: { query: inputValue },
          }
        );
        console.log(response);
        setResponse(response);
      } else {
        const response = await axios.post(
          "http://localhost:5050/v1/jeddebook/byEntry",
          {
            params: { query: inputValue, user: userID },
          }
        );
        console.log(response);
        setResponse(response);
        setUserHistory(response.data.userHistoryEntries);
      }
    } catch (error) {
      setResponse(undefined);
      console.error("Fehler bei der Anfrage:", error.message);
    }
  };

  return (
    <SearchContext.Provider value={{ response, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
