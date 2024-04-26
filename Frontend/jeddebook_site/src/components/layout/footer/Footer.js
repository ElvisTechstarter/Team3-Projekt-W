import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "./jeddebook_logo.png";
import styles from "./Footer.module.css";

function Footer() {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.footerTop}>
        <div className={styles.links}>
          Quicklinks
          <hr className={styles.separator1} />
          <div className={styles.footerLink}>
            <Link to="/" onClick={scrollToTop}>
              Homepage
            </Link>
          </div>
          <div className={styles.footerLink}>
            <Link to="/game" onClick={scrollToTop}>
              Game
            </Link>
          </div>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.socialMediaLinks}>
          <p>Folge uns auf...</p>
          <hr className={styles.separator2} />
          <div className={styles.socialMediaIcons}>
            <Link
              to="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className={styles.socialMediaIcon} />
            </Link>
            <Link
              to="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className={styles.socialMediaIcon} />
            </Link>
            <Link
              to="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className={styles.socialMediaIcon} />
            </Link>
            <Link
              to="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={styles.socialMediaIcon} />
            </Link>
          </div>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logoLink} onClick={scrollToTop}>
            <img
              src={logo}
              alt="Logo"
              className={`${styles.logo} ${isMouseDown ? styles.shrink : ""}`}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            />
          </Link>
        </div>
      </div>
      <hr />
      <div className={styles.footerBot}>
        <div className={styles.footerBotLeft}>
          <Link
            to="/impressum"
            onClick={scrollToTop}
            className={styles.impressumLink}
          >
            Impressum
          </Link>{" "}
          |
          <Link to="/agb" onClick={scrollToTop} className={styles.agbLink}>
            {" "}
            Allgemeine Geschäftsbedingungen
          </Link>{" "}
          |{" "}
          <Link
            to="/datenschutz"
            onClick={scrollToTop}
            className={styles.datenschutzLink}
          >
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
