// Updated TranslateOutput.js

import React, { useContext, useEffect, useState } from "react";
import styles from "./TranslateOutput.module.css";
import SearchContext from "./../../../contexts/SearchProvider";

function TranslateOutput() {
  const { response } = useContext(SearchContext);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Whenever the response changes, set showAnimation to true
    setShowAnimation(true);

    // Cleanup function: set showAnimation to false when component unmounts
    return () => {
      setShowAnimation(false);
    };
  }, [response]); // Trigger effect when response changes

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titles}>
        <div className={styles.languageContainer}>
          <div
            className={`${styles.de_entry} ${
              showAnimation ? styles.fadeIn : ""
            }`}
          >
            Deutscher Eintrag: <br /> <hr />
            {response && (response.data.DE_EN_entry?.de_entry || "No Entry")}
          </div>
          <div className={styles.spacer}></div>
          <div
            className={`${styles.en_entry} ${
              showAnimation ? styles.fadeIn : ""
            }`}
          >
            Englischer Eintrag: <br /> <hr />
            {response && (response.data.DE_EN_entry?.en_entry || "No Entry")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TranslateOutput;

// Updated TranslateOutput.module.css remains the same
