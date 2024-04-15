// Login.jsx
import React, { useState } from "react";
import Popup from "../../../../common/popup";

const LoginPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier kannst du die Anmeldeinformationen überprüfen
    setShowPopup(true);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {/* Login-Formularfelder */}
        <input type="text" placeholder="Benutzername" />
        <input type="password" placeholder="Passwort" />
        <button type="submit">Anmelden</button>
      </form>
      {showPopup && <Popup />}
    </div>
  );
};

export default LoginPopup;
