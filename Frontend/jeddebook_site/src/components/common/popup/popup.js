// Popup.jsx
import React from "react";

const Popup = () => {
  const handleClose = () => {
    // Hier kannst du die Popup-Anzeige zurücksetzen
  };

  return (
    <div className="popup">
      <h2>Popup-Inhalt</h2>
      <p>Dies ist der Inhalt des Popups.</p>
      <button onClick={handleClose}>Schließen</button>
    </div>
  );
};

export default Popup;
