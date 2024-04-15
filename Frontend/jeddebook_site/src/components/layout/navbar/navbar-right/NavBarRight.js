import StandardBtn from "../../../common/buttons/standard-btn";
import styles from "./NavBarRight.module.css";
import React, { useState } from "react";
import LoginButtonPopup from "./login-button-popup/LoginButtonPopup";

function NavBarRight() {
  const [LoginButtonPopup, setLoginButtonPopup] = useState(false);
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
      {showLoginButtonPopup && (
        <AddonClickClose={onClickShowAddTodo} setTodos={setTodos} />
      )}
      <ShowAddTodoBtn setShowTodo={onClickShowAddTodo} />
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
      <div className={styles.spacer} />
      <StandardBtn text={"Register"} style={{ fontWeight: 500 }} />
      <div className={styles.spacer} />
      <StandardBtn text={"Game"} style={{ fontWeight: 500 }} />
      <div className={styles.marginright} />
    </div>
  );
}

export default NavBarRight;
