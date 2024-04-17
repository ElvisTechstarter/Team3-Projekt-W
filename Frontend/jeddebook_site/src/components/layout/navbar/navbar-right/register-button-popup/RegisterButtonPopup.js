import React, { useState } from "react";
import axios from "axios";
import styles from "./RegisterButtonPopup.module.css";
import StandardTextInput from "../../../../common/text-inputs/standard-ti/StandardTextInput";

function RegisterButtonPopup({ onClose }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRepassword] = useState();
  const [email, setEmail] = useState();

  const handleRegister = async () => {
    if (repassword !== password) {
      alert("password don't match");

      return;
    }

    try {
      const body = {
        newUserName: username,
        newUserMail: email,
        newUserPW: password,
      };

      const response = await axios.post(
        "http://localhost:5050/v1/user/register",
        body
      );
      console.log("Antwort vom Server:", response.data);
      // Hier könntest du die Antwort des Servers weiter verarbeiten, z.B. Überprüfen, ob der Benutzername bereits existiert
      // Nach erfolgreicher Validierung könntest du dann die Registrierungsanfrage an den Backend-Server senden
    } catch (error) {
      console.error("Fehler bei der Anfrage:", error.message);
    }
  };

  function onClickChild(event) {
    event.stopPropagation();
  }

  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.popup} onClick={onClickChild}>
        <h2>Register</h2>
        <StandardTextInput
          type="text"
          placeholder="username"
          name="newUserName"
          setNewValue={setUsername}
        />
        <StandardTextInput
          type="password"
          placeholder="password"
          name="newUserPW"
          setNewValue={setPassword}
        />
        <StandardTextInput
          type="password"
          placeholder="repeat password"
          name="repeatPassword"
          setNewValue={setRepassword}
        />
        <StandardTextInput
          type="text"
          placeholder="e-mail address"
          name="newUserMail"
          setNewValue={setEmail}
        />
        <button onClick={handleRegister}>Complete Registration</button>
        <div style={{ height: "5px" }} />
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default RegisterButtonPopup;
