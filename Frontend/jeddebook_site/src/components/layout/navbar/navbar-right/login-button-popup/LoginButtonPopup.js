// LoginButtonPopup.js
import React from "react";
import styles from "./LoginButtonPopup.module.css";

function LoginButtonPopup({ onClose, onLogin }) {
  const handleLogin = () => {
    // Hier könntest du Validierung und weitere Logik für den Login implementieren
    onLogin();
  };
  function onClickChild(event) {
    event.stopPropagation();
  }
  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.popup} onClick={onClickChild}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
        <div style={{ height: "5px" }} />
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default LoginButtonPopup;
