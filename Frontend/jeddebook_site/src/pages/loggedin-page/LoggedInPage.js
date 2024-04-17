import styles from "./LoggedInPage.module.css";

function LoggedInPage() {
  return (
    <div className={styles.mainContainer}>
      <div>
        <h1>Ich bin eingeloggt!</h1>
        {/* Weitere Inhalte hier einfügen */}
      </div>
    </div>
  );
}

export default LoggedInPage;
