import React, { useContext, useState } from "react";
import styles from "./LoginButtonPopup.module.css";
import StandardTextInput from "../../../../common/text-inputs/standard-ti/StandardTextInput";
import AuthContext from "../../../../../contexts/AuthProvider";

function LoginButtonPopup({ onClose, onLoginSuccess, onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const [loginMessage, setLoginMessage] = useState(null);

  const handleLogin = () => {
    login(username, password, onLoginSuccess, setLoginMessage);
  };

  function onClickChild(event) {
    event.stopPropagation();
  }

  // External function to determine the login message style
  const getLoginMessageStyle = (loginMessage) => {
    let backgroundColor = "";
    if (loginMessage === "Login successful!") {
      backgroundColor = "var(--background-color)";
    } else {
      backgroundColor = "var(--secondary-color)";
    }
    const boxShadow =
      loginMessage === "Login successful!"
        ? "2px 2px 4px rgb(176, 176, 176);"
        : "";
    let display = "";
    if (loginMessage) {
      display = "flex";
    } else {
      display = "none";
    }

    return { backgroundColor, boxShadow, display };
  };

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
        <div
          className={styles.loginMessage}
          style={getLoginMessageStyle(loginMessage)}
        >
          {loginMessage && <p>{loginMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default LoginButtonPopup;
