// LoginButtonPopup.js

import React, { useState } from "react";
import axios from "axios";
import styles from "./LoginButtonPopup.module.css";
import StandardTextInput from "../../../../common/text-inputs/standard-ti/StandardTextInput";

function LoginButtonPopup({ onClose, onLoginSuccess, onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const handleLogin = async () => {
    try {
      const body = {
        username,
        password,
      };

      const response = await axios.post(
        "http://localhost:5050/v1/user/login",
        body
      );

      if (response.status === 200) {
        setLoginMessage("Login successful!");
        onLoginSuccess(); // Rufe die Funktion handleLoginSuccess auf, wenn das Login erfolgreich ist
      } else {
        setLoginMessage(
          "Login failed. Please check your credentials and try again."
        );
      }
    } catch (error) {
      console.error("Error:", error.message);
      setLoginMessage("An error occurred. Please try again later.");
    }
  };

  function onClickChild(event) {
    event.stopPropagation();
  }

  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.popup} onClick={onClickChild}>
        <h2>Login</h2>
        <StandardTextInput
          type="text"
          placeholder="Username"
          name="username"
          setNewValue={setUsername}
          value={username}
        />
        <StandardTextInput
          type="password"
          placeholder="Password"
          name="password"
          setNewValue={setPassword}
          value={password}
        />
        <button onClick={handleLogin}>Login</button>
        <div style={{ height: "5px" }} />
        <button onClick={onRegister}>Register</button>
        {loginMessage && <p>{loginMessage}</p>}
      </div>
    </div>
  );
}

export default LoginButtonPopup;
