import styles from "./TranslateInput.module.css";
import StandardBtn from "../../../common/buttons/standard-btn";
import React, { useState } from "react";

function TranslateInput() {
  const [SearchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    // Handle the search action here
    console.log("Search clicked!");
  };
  return (
    <div className={styles.mainContainer}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="   Hier kommt der TranslateInput hin"
        value={SearchInput}
        onChange={handleSearchInputChange}
      />
      <button className={styles.searchButton} onClick={handleSearchClick}>
        🔍
      </button>
    </div>
  );
}

export default TranslateInput;
