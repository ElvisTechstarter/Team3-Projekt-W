import React, { createContext, useState } from "react";
import axios from "axios";

const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [response, setResponse] = useState(null);

  const handleSearch = async (inputValue) => {
    try {
      // Sende die Daten an deinen Express-Server
      const response = await axios.get(
        "http://localhost:5050/v1/jeddebook/byEntry",
        {
          params: { query: inputValue },
        }
      );
      //console.log("Antwort vom Server:", response.data);
      //So greift man auf die data zu
      //console.log(response.data.de_entry);
      setResponse(response);
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
