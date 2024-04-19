import React, { useState } from "react";
import axios from "axios";
import styles from "./RegisterButtonPopup.module.css";
import StandardTextInput from "../../../../common/text-inputs/standard-ti/StandardTextInput";

function RegisterButtonPopup({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [email, setEmail] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");
  const [attemptedRegistration, setAttemptedRegistration] = useState(false);

  const handleRegister = async () => {
    if (attemptedRegistration) {
      // Wenn bereits versucht wurde, sich zu registrieren, breche ab
      return;
    }

    setAttemptedRegistration(true);

    if (repassword !== password) {
      setRegistrationMessage("Passwords don't match");
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

      if (response.status === 200) {
        setRegistrationMessage("Registration successful!");
        // Hier könntest du weitere Aktionen ausführen, z.B. den Benutzer weiterleiten
      } else {
        setRegistrationMessage("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setRegistrationMessage("An error occurred. Please try again later.");
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
        {attemptedRegistration && <p>{registrationMessage}</p>}
      </div>
    </div>
  );
}

export default RegisterButtonPopup;
