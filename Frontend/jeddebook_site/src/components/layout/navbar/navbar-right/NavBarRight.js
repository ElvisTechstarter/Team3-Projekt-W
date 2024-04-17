import React, { useState } from "react";
import { Link } from "react-router-dom";
import StandardBtn from "../../../common/buttons/standard-btn";
import styles from "./NavBarRight.module.css";
import LoginButtonPopup from "./login-button-popup/LoginButtonPopup";
import RegisterButtonPopup from "./register-button-popup/RegisterButtonPopup";

function NavBarRight() {
  const [showLoginButtonPopup, setShowLoginButtonPopup] = useState(false);
  const [showRegisterButtonPopup, setShowRegisterButtonPopup] = useState(false);
  const [username] = useState("");
  const [password] = useState("");

  const handleLogin = () => {
    console.log(
      "Logging in with username:",
      username,
      "and password:",
      password
    );
    setShowLoginButtonPopup(false);
  };

  const handleRegister = () => {
    console.log(
      "Registering user with username:",
      username,
      "and password:",
      password
    );
    setShowRegisterButtonPopup(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className={styles.mainContainer}>
      {showLoginButtonPopup && (
        <LoginButtonPopup
          onClose={() => setShowLoginButtonPopup(false)}
          onLogin={handleLogin}
          onRegister={() => setShowRegisterButtonPopup(true)}
        />
      )}
      {showRegisterButtonPopup && (
        <RegisterButtonPopup
          onClose={() => setShowRegisterButtonPopup(false)}
          onRegister={handleRegister}
        />
      )}

      <div className={styles.spacer} />
      <div className={styles.buttonContainer}>
        <StandardBtn
          text={"Login"}
          onClick={() => setShowLoginButtonPopup(true)}
          style={{ fontWeight: 500 }}
        />
      </div>
      <div className={styles.spacer} />
      <StandardBtn
        text={"Register"}
        onClick={() => setShowRegisterButtonPopup(true)}
        style={{ fontWeight: 500 }}
      />
      <div className={styles.spacer} />

      <Link to="/game" className={styles.gameLink} onClick={scrollToTop}>
        <StandardBtn text={"Game"} style={{ fontWeight: 500 }} />
      </Link>
      <div className={styles.marginright} />
    </div>
  );
}

export default NavBarRight;
