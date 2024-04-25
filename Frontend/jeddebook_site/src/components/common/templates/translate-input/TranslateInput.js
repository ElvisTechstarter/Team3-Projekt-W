import React, { useState, useContext, useEffect } from "react";
import styles from "./TranslateInput.module.css";
import SearchContext from "./../../../contexts/SearchProvider";
import { TbTrashX } from "react-icons/tb";
import { ImSearch } from "react-icons/im";

function TranslateInput({ onSearch, onClear }) {
  const [isPressed, setIsPressed] = useState(false); //state for icons
  const [inputValue, setInputValue] = useState(""); //state for searchinput
  const [inputFocused, setInputFocused] = useState(false); //state for searchfield
  const [suggestions, setSuggestions] = useState([]); //state for suggestion
  const [hoveredSuggestion, setHoveredSuggestion] = useState(null); //state for hovered suggestion
  const [suggestionImage, setSuggestionImage] = useState(""); // state for image url
  const { handleSearch, handleSuggestions } = useContext(SearchContext); //handle databaserequests
  const imageUrl =
    "http://localhost:3000/static/media/jeddebook_logo.28e0629874b01b55eccc.png"; //fixed url for testing purposes

  //if searchfield is active
  const handleInputFocus = () => {
    setInputFocused(true);
  };
  //if searchfield is not active anymore
  const handleInputBlur = () => {
    setTimeout(() => setInputFocused(false), 200);
  };

  //on button down for icons
  const handleMouseDown = () => {
    setIsPressed(true);
  };
  //on release for icons
  const handleMouseUp = () => {
    setIsPressed(false);
    handleSearch(inputValue);
  };

  //debounces suggestion logic
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

  //function for bin-icon
  const handleClear = () => {
    setInputValue("");
  };

  //handles clickin gon suggestions
  const handleSelectSuggestion = (suggestion) => {
    setInputValue(suggestion);
    handleInputBlur();
    handleSearch(suggestion);
  };

  //handles the hovering over suggestions
  const handleMouseEnter = (filteredSuggestion) => {
    setHoveredSuggestion(filteredSuggestion);
  };

  //removes the container if mouseover is done
  const handleMouseLeave = () => {
    setHoveredSuggestion(null);
  };

  //debounces the call of the image
  useEffect(() => {
    const timer = setTimeout(() => {
      if (hoveredSuggestion) {
        setSuggestionImage(imageUrl);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      setSuggestionImage("");
    };
  }, [hoveredSuggestion]);

  //renders the whole suggestions div
  const renderSuggestions = () => {
    if (inputValue && inputFocused) {
      return (
        <ul className={styles.suggestionsList}>
          {suggestions.map((filteredSuggestion) => (
            <li
              key={filteredSuggestion}
              onClick={() => handleSelectSuggestion(filteredSuggestion)}
              onMouseEnter={() => handleMouseEnter(filteredSuggestion)}
              onMouseLeave={() => handleMouseLeave()}
            >
              {filteredSuggestion}
              {hoveredSuggestion === filteredSuggestion && (
                <div className={styles.imageContainer}>
                  <img src={suggestionImage} alt="" />
                </div>
              )}
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
