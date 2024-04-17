import React, { useContext } from "react";
import styles from "./SearchHistory.module.css";
import AuthContext from "./../../../contexts/AuthProvider";

function SearchHistory() {
  //let isLoggedIn = true;

  // Feste Liste für den Suchverlauf
  const fixedHistory = ["Suchanfrage 1", "Suchanfrage 2", "Suchanfrage 3"];
  const { isLoggedIn } = useContext(AuthContext);

  // Iteriere über die feste Liste und zeige die Suchanfragen an
  const searchHistoryItems = [];
  for (let i = 0; i < fixedHistory.length; i++) {
    searchHistoryItems.push(<li key={i}>{fixedHistory[i]}</li>);
  }

  return (
    <div className={styles.searchHistoryContainer}>
      {isLoggedIn ? (
        <div>
          <h2>Suchverlauf:</h2>
          <ul>{searchHistoryItems}</ul>
        </div>
      ) : (
        <p>Du musst eingeloggt sein, um den Suchverlauf anzuzeigen.</p>
      )}
    </div>
  );
}

export default SearchHistory;
