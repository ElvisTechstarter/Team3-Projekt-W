import React, { useState, useContext, useEffect } from "react";
import styles from "./TranslateInput.module.css";
import SearchContext from "./../../../contexts/SearchProvider";
import { TbTrashX } from "react-icons/tb";
import { ImSearch } from "react-icons/im";

function TranslateInput({ onSearch, onClear }) {
  const [isPressed, setIsPressed] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const { handleSearch, handleSuggestions } = useContext(SearchContext);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => setInputFocused(false), 200);
  };

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    handleSearch(inputValue);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue.length > 0) {
        handleSuggestions(inputValue, setSuggestions);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [inputValue, handleSuggestions]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleClear = () => {
    setInputValue("");
  };

  const handleSelectSuggestion = (suggestion) => {
    setInputValue(suggestion);
    handleInputBlur();
    handleSearch(suggestion);
  };

  const renderSuggestions = () => {
    if (inputValue && inputFocused) {
      return (
        <ul className={styles.suggestionsList}>
          {suggestions.map((filteredSuggestion) => (
            <li
              key={filteredSuggestion}
              onClick={() => handleSelectSuggestion(filteredSuggestion)}
            >
              {filteredSuggestion}
            </li>
          ))}
          {suggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(inputValue.toLowerCase())
          ).length === 0 && <li>No match.</li>}
        </ul>
      );
    }
    return null;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Call your function here (e.g., handleSendMessage)
      handleSearch(inputValue);
      //console.log("Enter key pressed");
    }
  };
  return (
    <div className={styles.outerContainer}>
      <div className={styles.mainContainer}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Im Wörterbuch suchen"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
        />

        <div className={styles.buttonContainer}>
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
      </div>
      <div className={styles.suggestionsContainer}>{renderSuggestions()}</div>
    </div>
  );
}

export default TranslateInput;
