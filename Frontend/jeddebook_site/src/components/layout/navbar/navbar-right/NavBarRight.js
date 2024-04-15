import StandardBtn from "../../../common/buttons/standard-btn";
import styles from "./NavBarRight.module.css";
import React, { useState } from "react";

function NavBarRight() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Logik für die Anmeldung hier einfügen
    setIsLoggedIn(true); // Setze isLoggedIn auf true, um den Benutzer einzuloggen
  };

  const handleLoginButtonClick = () => {
    if (!isLoggedIn) {
      // Öffne ein neues Fenster für den Login, wenn der Benutzer nicht eingeloggt ist
      const loginWindow = window.open(
        "",
        "_blank",
        `width=400,height=400,left=${(window.screen.width - 400) / 2},top=${
          (window.screen.height - 400) / 2
        },scrollbars=yes,resizable=yes,menubar=no`
      );

      // Ändere den Titel des geöffneten Fensters
      loginWindow.document.title = "test123";
      // Erstelle die Eingabefelder und den Login-Button
      const usernameInput = document.createElement("input");
      usernameInput.type = "text";
      usernameInput.placeholder = "Username";
      usernameInput.value = username;
      usernameInput.addEventListener("input", (e) =>
        setUsername(e.target.value)
      );

      const passwordInput = document.createElement("input");
      passwordInput.type = "password";
      passwordInput.placeholder = "Password";
      passwordInput.value = password;
      passwordInput.addEventListener("input", (e) =>
        setPassword(e.target.value)
      );

      const loginButton = document.createElement("button");
      loginButton.type = "button";
      loginButton.textContent = "Login";
      loginButton.addEventListener("click", handleLogin);

      // Füge die erstellten Elemente dem Dokument des loginWindow hinzu
      loginWindow.document.body.appendChild(usernameInput);
      loginWindow.document.body.appendChild(document.createElement("br"));
      loginWindow.document.body.appendChild(passwordInput);
      loginWindow.document.body.appendChild(document.createElement("br"));
      loginWindow.document.body.appendChild(loginButton);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.buttonContainer}>
        <StandardBtn
          text={"Login"}
          style={{ fontWeight: 500 }}
          onClick={handleLoginButtonClick}
        />
      </div>
      {isLoggedIn && <p>Welcome, {username}!</p>}
      {/* Zeige eine Begrüßungsnachricht an, wenn der Benutzer eingeloggt ist */}
      <div className={styles.spacer} />
      <StandardBtn text={"Register"} style={{ fontWeight: 500 }} />
      <div className={styles.spacer} />
      <StandardBtn text={"Game"} style={{ fontWeight: 500 }} />
      <div className={styles.marginright} />
    </div>
  );
}

export default NavBarRight;
