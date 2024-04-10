import StandardBtn from "../../../common/buttons/standard-btn";
import styles from "./NavBarRight.module.css";
import React, { useState } from "react";

function NavBarRight() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        placeholder="username"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        className={styles.password}
        type="password"
        placeholder="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <div className={styles.buttonContainer}>
        <StandardBtn text={"Login"} />
      </div>
      <div className={styles.spacer} />
      <StandardBtn text={"Register"} />
    </div>
  );
}

export default NavBarRight;
