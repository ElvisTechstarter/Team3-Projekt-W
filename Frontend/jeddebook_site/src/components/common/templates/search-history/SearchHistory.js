import React, { useContext } from "react";
import styles from "./SearchHistory.module.css";
import AuthContext from "./../../../contexts/AuthProvider";
import SearchContext from "../../../contexts/SearchProvider";

function SearchHistory() {
  const { isLoggedIn, userHistory } = useContext(AuthContext);
  const { handleSearch } = useContext(SearchContext);

  // Create a new array to store formatted search history items
  const formattedSearchHistory = [];

  if (isLoggedIn && userHistory) {
    // Check if userHistory exists before iterating over it
    userHistory.forEach((element) => {
      // Format the item (e.g., capitalize, add bullet points, etc.)
      const formattedItem = `• ${element.user_history_entry
        .charAt(0)
        .toUpperCase()}${element.user_history_entry.slice(1)}`;
      // Append the formatted item to the new array
      formattedSearchHistory.push(formattedItem);
    });
  }

  function handleItemClick(item) {
    // Remove the bullet point and revert the capitalization
    const unformattedItem = item.slice(2).toLowerCase();

    // Do something with the unformatted item (e.g., display it, navigate to a page, etc.)
    handleSearch(unformattedItem);
  }

  return (
    <div className={styles.searchHistoryContainer}>
      {isLoggedIn ? (
        <div>
          <h2>Suchverlauf:</h2>
          <hr />
          <ul>
            <div className={styles.searchHistoryContainerList}>
              {formattedSearchHistory.map((item, index) => (
                <div>
                  <li key={index} onClick={() => handleItemClick(item)}>
                    {item}
                  </li>
                </div>
              ))}
            </div>
          </ul>
        </div>
      ) : (
        <p>Du musst eingeloggt sein, um den Suchverlauf anzuzeigen.</p>
      )}
    </div>
  );
}

export default SearchHistory;
