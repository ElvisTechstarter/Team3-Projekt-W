import styles from "./LoginButtonPopup.module.css";
import React, { useContext } from "react";
import AuthContext from "../../../../contexts/AuthProvider";

function LoginButtonPopup({ onClose, onLogin }) {
  const { login, logout } = useContext(AuthContext);

  const handleLogin = () => {
    // Hier könntest du Validierung und weitere Logik für den Login implementieren
    login();
    onLogin();
  };

  const handleLogout = () => {
    // Hier könntest du Validierung und weitere Logik für den Logout implementieren
    logout();
    onClose();
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
        <button onClick={handleLogout}>Cancel</button>
      </div>
    </div>
  );
}

export default LoginButtonPopup;
