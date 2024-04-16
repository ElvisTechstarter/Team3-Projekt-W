import React, { useContext } from 'react';
import styles from "./Checkbox.module.css";
import AuthContext from '../../../contexts/AuthContext'; // Pfade anpassen

function Checkbox({ onClick }) {
  // Zugriff auf den Login-Status über den AuthContext
  const { isLoggedIn } = useContext(AuthContext);

  return (
    // Wenn eingeloggt, füge das onClick-Event hinzu, sonst null (kein Event)
    <div className={styles.mainContainer} onClick={isLoggedIn ? onClick : null}>
      {/* Wenn eingeloggt, zeige die Checkbox an, sonst null */}
      {isLoggedIn ? <div className={styles.isChecked} /> : null}
    </div>
  );
}

export default Checkbox;


