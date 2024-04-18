import React from "react";
import { Link } from "react-router-dom";
import logo from "./jeddebook_logo.png";
import styles from "./Footer.module.css";

function Footer() {
  // Funktion, die zur Oberseite der Seite scrollt
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.footerTop}>
        <div className={styles.links}>
          Quicklinks
          <hr />{" "}
          <div className={styles.footerLink}>
            <Link to="/" onClick={scrollToTop} className={styles.footerLink}>
              Homepage
            </Link>
          </div>
          <div className={styles.footerLink}>
            <Link
              to="/game"
              onClick={scrollToTop}
              className={styles.footerLink}
            >
              Game
            </Link>
          </div>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.logo}>
          <img className={styles.logo} src={logo} alt="Logo" />
        </div>
      </div>

      <hr />
      <div className={styles.footerBot}>
        <div className={styles.footerBotLeft}>
          {/* Hier wird der Link zum Impressum hinzugefügt und beim Klicken wird zur Oberseite der Seite gescrollt */}
          <Link
            to="/impressum"
            onClick={scrollToTop}
            className={styles.impressumLink}
          >
            {" "}
            Impressum
          </Link>{" "}
          |
          <Link to="/agb" onClick={scrollToTop} className={styles.agbLink}>
            {" "}
            Allgemeine Geschäftsbedingungen
          </Link>{" "}
          |
          <Link
            to="/datenschutz"
            onClick={scrollToTop}
            className={styles.datenschutzLink}
          >
            {" "}
            Datenschutz
          </Link>{" "}
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.footerBotRight}>
          Copyright jeddebook ©
          <br />
          2024. Alle Rechte vorbehalten.
        </div>
      </div>
    </div>
  );
}

export default Footer;
