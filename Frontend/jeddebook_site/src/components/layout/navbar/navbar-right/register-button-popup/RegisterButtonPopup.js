import React, { useState } from "react";
import styles from "./RegisterButtonPopup.module.css";
import StandardTextInput from "../../../../common/text-inputs/standard-ti/StandardTextInput";
import { UserMutations } from "../../../../../apis/jeddebook/user";

function RegisterButtonPopup({ onClose, onRegisterSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [email, setEmail] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");
  const [attemptedRegistration, setAttemptedRegistration] = useState(false);

  const handleRegister = async () => {
    if (
      username === "" ||
      password === "" ||
      repassword === "" ||
      email === ""
    ) {
      setRegistrationMessage("Fields cannot be empty");
      return;
    }

    if (repassword !== password) {
      setRegistrationMessage("Passwords don't match");
      return;
    }

    if (attemptedRegistration) {
      return;
    }

    setAttemptedRegistration(true);

    try {
      const body = {
        newUserName: username,
        newUserMail: email,
        newUserPW: password,
      };

      const response = await UserMutations.registerUser(body);

      if (response.status === 200) {
        setRegistrationMessage("Registration successfull!");
        onRegisterSuccess();
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

  // External function to determine the Register message style
  const getRegisterMessageStyle = (registrationMessage) => {
    let backgroundColor = "";
    if (registrationMessage === "Registration successfull!") {
      backgroundColor = "var(--background-color)";
    } else {
      backgroundColor = "var(--secondary-color)";
    }
    const boxShadow =
      registrationMessage === "Registration successfull!"
        ? "2px 2px 4px rgb(176, 176, 176);"
        : "";
    let display = "";
    if (registrationMessage) {
      display = "flex";
    } else {
      display = "none";
    }

    return { backgroundColor, boxShadow, display };
  };

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
        <div
          className={styles.registerMessage}
          style={getRegisterMessageStyle(registrationMessage)}
        >
          {registrationMessage && <p>{registrationMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default RegisterButtonPopup;
