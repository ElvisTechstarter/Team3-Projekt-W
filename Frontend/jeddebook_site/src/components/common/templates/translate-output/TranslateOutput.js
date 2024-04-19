// TranslateOutput.js

import React, { useContext, useEffect, useState } from "react";
import styles from "./TranslateOutput.module.css"; // Import your CSS styles
import SearchContext from "./../../../contexts/SearchProvider";

function TranslateOutput() {
  const { response } = useContext(SearchContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-out animation
    setIsVisible(false);

    // After a short delay (adjustable), trigger the fade-in animation with the new response
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust the delay as needed (e.g., 300ms)
  }, [response]); // Trigger effect when response changes

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titles}>
        <div className={styles.languageContainer}>
          <div className={styles.de_entry}>
            Deutscher Eintrag: <br /> <hr />
            <div
              className={`${styles.response_de} ${
                isVisible ? styles.fadeIn : ""
              }`}
            >
              {response && (response.data.DE_EN_entry?.de_entry || "No Entry")}
            </div>
          </div>
          <div className={styles.spacer}></div>
          <div className={styles.en_entry}>
            Englischer Eintrag: <br /> <hr />
            <div
              className={`${styles.response_en} ${
                isVisible ? styles.fadeIn : ""
              }`}
            >
              {response && (response.data.DE_EN_entry?.en_entry || "No Entry")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TranslateOutput;
