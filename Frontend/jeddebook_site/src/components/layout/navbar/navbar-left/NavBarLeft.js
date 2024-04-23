import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBarLeft.module.css";
import logo from "./jeddebook_logo.png";

function NavBarLeft() {
  return (
    <div className={styles.mainContainer}>
      <Link to="/" className={styles.logoLink}>
        <img className={styles.logo} src={logo} alt="Logo" />
      </Link>
    </div>
  );
}

export default NavBarLeft;
