import React, { useContext } from "react";
import styles from "./TranslateOutput.module.css";
import SearchContext from "./../../../contexts/SearchProvider";

function TranslateOutput() {
  const { response } = useContext(SearchContext);
  return (
    <div className={styles.mainContainer}>
      <div>
        <div className={styles.titles}>
          <div className={styles.languageContainer}>
            <div className={styles.de_entry}>
              Deutscher Eintrag: <br /> <hr />
              {response && (response.data.DE_EN_entry?.de_entry || "No Entry")}
            </div>
            <div className={styles.spacer}></div>
            <div className={styles.en_entry}>
              Englischer Eintrag: <br /> <hr />
              {response && (response.data.DE_EN_entry?.en_entry || "No Entry")}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.titles} style={{ display: "none" }}>
        Mögliche Anwendungsfälle:
        <div className={styles.Features}>
          <div className={styles.phrases}>
            <div>Ein Apfel am Tag hält einen gesund.</div>
            <div className={styles.spacer}></div>
            <div>An apple a day keeps the doctor away.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TranslateOutput;
