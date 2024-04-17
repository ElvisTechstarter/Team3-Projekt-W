import styles from "./HomePage.module.css";
import TranslateInput from "../../components/common/templates/translate-input";
import TranslateOutput from "../../components/common/templates/translate-output";
import SearchHistory from "../../components/common/templates/search-history";

function HomePage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.translationContainer}>
        <div className={styles.translateInputContainer}>
          <TranslateInput />
        </div>
        <div className={styles.translateOutputContainer}>
          <TranslateOutput />
        </div>
      </div>
      <SearchHistory isLoggedIn={true} />
    </div>
  );
}

export default HomePage;
