import styles from "./TranslateInput.module.css";
import axios from "axios";
import React, { useState } from "react";

function TranslateInput({ onSearch, onClear }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = async () => {
    try {
      // Sende die Daten an deinen Express-Server
      const response = await axios.get(
        "http://localhost:5050/v1/jeddebook/byEntry",
        {
          params: { query: inputValue },
        }
      );
      console.log("Antwort vom Server:", response.data);
    } catch (error) {
      console.error("Fehler bei der Anfrage:", error.message);
    }
  };

  const handleClear = () => {
    setInputValue("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(); // Suche auslösen, wenn Enter gedrückt wird
    }
  };

  return (
    <div className={styles.mainContainer}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Im Wörterbuch suchen"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        🔍
      </button>
      <button className={styles.clearButton} onClick={handleClear}>
        🗑️
      </button>
    </div>
  );
}

export default TranslateInput;
