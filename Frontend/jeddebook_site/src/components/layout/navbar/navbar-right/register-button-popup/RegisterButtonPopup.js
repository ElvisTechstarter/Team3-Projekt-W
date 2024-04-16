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
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="repeat password" placeholder="Repeat password" />
        <button onClick={handleRegister}>Register</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default RegisterButtonPopup;
