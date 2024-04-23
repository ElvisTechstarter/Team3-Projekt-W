import styles from "./TranslateInput.module.css";
import React, { useState, useContext } from "react";
import SearchContext from "./../../../contexts/SearchProvider";
import { TbTrashX } from "react-icons/tb";
import { ImSearch } from "react-icons/im";

function TranslateInput({ onSearch, onClear }) {
  const [isPressed, setIsPressed] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { handleSearch } = useContext(SearchContext);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    handleSearch(inputValue);
  };

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
        className={`${styles.searchButton} ${
          isPressed ? styles.searchButtonPressed : ""
        }`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <ImSearch size={22} />
      </button>
      <button className={styles.clearButton} onClick={handleClear}>
        <TbTrashX size={29} />
      </button>
    </div>
  );
}

export default TranslateInput;
