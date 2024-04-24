import React, { useState } from "react";
import styles from "./AutoComplete.module.css";

const AutoComplete = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  // Handle user input changes
  const onChange = (event) => {
    const userInput = event.target.value.toLowerCase();
    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(userInput)
    );

    setInput(userInput);
    setFilteredSuggestions(filtered);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  // Handle suggestion selection
  const onClick = (event) => {
    const selectedSuggestion = event.target.innerText;
    setInput(selectedSuggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  // Handle keyboard navigation (up/down arrow keys)
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      onClick(event);
    } else if (event.key === "ArrowUp") {
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (event.key === "ArrowDown") {
      setActiveSuggestionIndex((prevIndex) =>
        prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
  };

  const SuggestionsListComponent = () => {
    return (
      <ul className="suggestions">
        {filteredSuggestions.map((suggestion, index) => {
          const isActive = index === activeSuggestionIndex;
          const className = isActive ? "suggestion-active" : "";

          return (
            <li key={suggestion} className={className} onClick={onClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <input
        className={styles.searchInput}
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      {showSuggestions && input && <SuggestionsListComponent />}
    </>
  );
};

export default AutoComplete;
