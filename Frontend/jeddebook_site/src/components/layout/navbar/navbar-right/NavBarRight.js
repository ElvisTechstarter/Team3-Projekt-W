// NavBarRight.js
import React, { useState } from "react";
import StandardBtn from "../../../common/buttons/standard-btn";
import styles from "./NavBarRight.module.css";
import LoginButtonPopup from "./login-button-popup/LoginButtonPopup";
import RegisterButtonPopup from "./register-button-popup/RegisterButtonPopup";

function NavBarRight() {
  const [showLoginButtonPopup, setShowLoginButtonPopup] = useState(false);
  const [showRegisterButtonPopup, setShowRegisterButtonPopup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Hier kannst du die Login-Logik implementieren
    console.log(
      "Logging in with username:",
      username,
      "and password:",
      password
    );
    // Nach dem Login kannst du das Popup schließen
    setShowLoginButtonPopup(false);
  };

  const handleRegister = () => {
    // Hier kannst du die Register-Logik implementieren
    console.log(
      "Registering user with username:",
      username,
      "and password:",
      password
    );
    // Nach der Registrierung kannst du das Popup schließen
    setShowRegisterButtonPopup(false);
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
      <input
        className={styles.username}
        type="text"
        placeholder="   username"
        value={username}
        onChange={handleUsernameChange}
      />
      <div className={styles.spacer} />
      <input
        className={styles.password}
        type="password"
        placeholder="   password"
        value={password}
        onChange={handlePasswordChange}
      />
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
      <StandardBtn text={"Game"} style={{ fontWeight: 500 }} />
      <div className={styles.marginright} />
    </div>
  );
}

export default NavBarRight;
