import StandardBtn from "../../../common/buttons/standard-btn";
import styles from "./NavBarRight.module.css";
import React, { useState } from "react";
import LoginPopup from "./login-popup";
import Popup from "../../../common/popup";

function NavBarRight() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Logik für die Anmeldung hier einfügen
    setIsLoggedIn(true); // Setze isLoggedIn auf true, um den Benutzer einzuloggen
    setShowPopup(true); // Setze showPopup auf true, um das Popup anzuzeigen

    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    return (
      <div className={styles.mainContainer}>
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
          <StandardBtn text={"Login"} style={{ fontWeight: 500 }} />
        </div>
        <div></div>
        {!isLoggedIn && <LoginPopup onLogin={handleLogin} />}{" "}
        {/* Zeige das Login-Formular nur an, wenn der Benutzer nicht eingeloggt ist */}
        {showPopup && <Popup />}{" "}
        {/* Zeige das Popup an, wenn showPopup true ist */}
        <div className={styles.spacer} />
        <StandardBtn text={"Register"} style={{ fontWeight: 500 }} />
        <div className={styles.spacer} />
        <StandardBtn text={"Game"} style={{ fontWeight: 500 }} />
        <div className={styles.marginright} />
      </div>
    );
  };
}

export default NavBarRight;
