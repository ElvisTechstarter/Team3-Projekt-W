import StandardBtn from "../../../common/buttons/standard-btn";
import styles from "./NavBarRight.module.css";

function NavBarRight() {
  return (
    <div className={styles.mainContainer}>
      <StandardBtn text={"Login"} />

      <div className={styles.spacer} />
      <StandardBtn text={"Register"} />
    </div>
  );
}

export default NavBarRight;
