import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import StandardBtn from "../../../common/buttons/standard-btn";
import styles from "./NavBarRight.module.css";
import LoginButtonPopup from "./login-button-popup/LoginButtonPopup";
import RegisterButtonPopup from "./register-button-popup/RegisterButtonPopup";
import AuthContext from "../../../contexts/AuthProvider";

function NavBarRight() {
  const [showLoginButtonPopup, setShowLoginButtonPopup] = useState(false);
  const [showRegisterButtonPopup, setShowRegisterButtonPopup] = useState(false);
  const { isLoggedIn, setIsLoggedIn, logout } = useContext(AuthContext);

  const handleLogin = () => {
    setShowLoginButtonPopup(true);
    setShowRegisterButtonPopup(false); // Register-Popup ausblenden
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLoginButtonPopup(false); // Login-Popup ausblenden
  };

  const handleRegister = () => {
    setShowRegisterButtonPopup(true);
    setShowLoginButtonPopup(false); // Login-Popup ausblenden
  };

  const handleLogout = () => {
    logout();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className={styles.mainContainer}>
      {showLoginButtonPopup && (
        <LoginButtonPopup
          onClose={() => setShowLoginButtonPopup(false)}
          onLoginSuccess={handleLoginSuccess}
          onRegister={() => setShowRegisterButtonPopup(true)}
        />
      )}
      {showRegisterButtonPopup && (
        <RegisterButtonPopup
          onClose={() => setShowRegisterButtonPopup(false)}
          onRegister={handleRegister}
        />
      )}

      <div className={styles.spacer} />
      {isLoggedIn ? (
        <div className={styles.buttonContainer}>
          <StandardBtn text={"Logged In"} />
          <StandardBtn text={"Logout"} onClick={handleLogout} />
        </div>
      ) : (
        <>
          <div className={styles.buttonContainer}>
            <StandardBtn
              text={"Login"}
              onClick={handleLogin}
              style={{ fontWeight: 500 }}
            />
          </div>
          <div className={styles.spacer} />
          <StandardBtn
            text={"Register"}
            onClick={handleRegister}
            style={{ fontWeight: 500 }}
          />
        </>
      )}

      <div className={styles.spacer} />

      <Link to="/game" className={styles.gameLink} onClick={scrollToTop}>
        <StandardBtn text={"Game"} style={{ fontWeight: 500 }} />
      </Link>
      <div className={styles.marginright} />
    </div>
  );
}

export default NavBarRight;
