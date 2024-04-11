import { useState } from "react";
import Checkbox from "../../components/common/buttons/checkbox";
import LoadingDiv from "../../components/common/templates/loading-div";
import styles from "./HomePage.module.css";
import TranslateInput from "../../components/common/templates/translate-input";
import TranslateOutput from "../../components/common/templates/translate-output";

function HomePage() {
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  function onClickStayLoggedIn() {
    setStayLoggedIn(!stayLoggedIn);
  }
  return (
    <div className={styles.mainContainer}>
      <div> This is my homepage</div>
      <LoadingDiv />
      <Checkbox isChecked={stayLoggedIn} onClick={onClickStayLoggedIn} />
      <TranslateInput />
      <TranslateOutput />
    </div>
  );
}

export default HomePage;
