import styles from "./NavBarLeft.module.css";
import logo from "./jeddebook_logo.png";

function NavBarLeft() {
  return (
    <div className={styles.mainContainer}>
      <img className={styles.logo} src={logo} alt="Logo" />
    </div>
  );
}

export default NavBarLeft;
