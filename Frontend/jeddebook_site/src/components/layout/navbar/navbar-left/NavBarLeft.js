import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBarLeft.module.css";
import logo from "./jeddebook_logo.png";

function NavBarLeft() {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <div className={styles.mainContainer}>
      <Link to="/" className={styles.logoLink}>
        <img
          src={logo}
          alt="Logo"
          className={`${styles.logo} ${isMouseDown ? styles.shrink : ""}`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
      </Link>
    </div>
  );
}

export default NavBarLeft;
