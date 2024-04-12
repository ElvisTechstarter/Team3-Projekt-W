import logo from "./jeddebook_logo.png";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.footerTop}>
        <div className={styles.links}>
          Quicklinks
          <hr /> Homepage
          <br /> Game
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.logo}>
          <img className={styles.logo} src={logo} alt="Logo" />
        </div>
      </div>

      <hr />
      <div className={styles.footerBot}>
        <div className={styles.footerBotLeft}>
          Impressum | Allgemeine Geschäftsbedingungen | Datenschutz
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
