import styles from "./TranslateInput.module.css";
import React, { useState, useContext } from "react";
import SearchContext from "./../../../contexts/SearchProvider";

function TranslateInput({ onSearch, onClear }) {
  const [inputValue, setInputValue] = useState("");
  const { handleSearch } = useContext(SearchContext);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClear = () => {
    setInputValue("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(inputValue); // Suche auslösen, wenn Enter gedrückt wird
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
      <button
        className={styles.searchButton}
        onClick={() => handleSearch(inputValue)}
      >
        🔍
      </button>
      <button className={styles.clearButton} onClick={handleClear}>
        🗑️
      </button>
    </div>
  );
}

export default TranslateInput;
