// searchFunctions.js

import axios from "axios";

export const handleSearch = async (inputValue) => {
  try {
    // Sende die Daten an deinen Express-Server
    const response = await axios.get(
      "http://localhost:5050/v1/jeddebook/byEntry",
      {
        params: { query: inputValue },
      }
    );
    console.log("Antwort vom Server:", response.data);
    //So greift man auf die data zu
    console.log(response.data.de_entry);
  } catch (error) {
    console.error("Fehler bei der Anfrage:", error.message);
  }
};
