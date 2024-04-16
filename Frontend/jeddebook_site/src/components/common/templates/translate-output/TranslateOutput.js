import styles from "./TranslateOutput.module.css";

function TranslateOutput() {
  return (
    <div className={styles.mainContainer}>
      <div>
        <div className={styles.titles}>
          Die englische Übersetzung lautet:
          <div className={styles.languageContainer}>
            <div className={styles.Input}>Apfel</div>
            <div className={styles.spacer}></div>
            <div className={styles.Output}>Apple</div>
          </div>
        </div>
      </div>
      <div className={styles.titles}>
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
