// LoginButtonPopup.js
import React from "react";
import styles from "./RegisterButtonPopup.module.css";

function RegisterButtonPopup({ onClose, onRegister }) {
  const handleRegister = () => {
    // Hier könntest du Validierung und weitere Logik für den Login implementieren
    onRegister();
  };
  function onClickChild(event) {
    event.stopPropagation();
  }
  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.popup} onClick={onClickChild}>
        <h2>Register</h2>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <input type="repeat password" placeholder="repeat password" />
        <input type="text" placeholder="e-mail address" />
        <button onClick={handleRegister}>Let's go!</button>
        <div style={{ height: "5px" }} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default RegisterButtonPopup;
