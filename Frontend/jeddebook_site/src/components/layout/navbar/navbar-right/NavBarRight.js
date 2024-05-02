import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import StandardBtn from "../../../common/buttons/standard-btn";
import styles from "./NavBarRight.module.css";
import LoginButtonPopup from "./login-button-popup/LoginButtonPopup";
import RegisterButtonPopup from "./register-button-popup/RegisterButtonPopup";
import AuthContext from "../../../../contexts/AuthProvider";

function NavBarRight() {
  const [showLoginButtonPopup, setShowLoginButtonPopup] = useState(false);
  const [showRegisterButtonPopup, setShowRegisterButtonPopup] = useState(false);
  const { isLoggedIn, setIsLoggedIn, logout } = useContext(AuthContext);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setTimeout(() => setShowLoginButtonPopup(false), 3000);
  };

  const handleRegister = () => {
    setShowRegisterButtonPopup(true);
    setTimeout(() => setShowRegisterButtonPopup(false), 3000);
  };

  const closePopups = () => {
    setShowLoginButtonPopup(false);
    setShowRegisterButtonPopup(false);
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
          onLoginSuccess={handleLogin}
          onRegister={() => {
            closePopups();
            setShowRegisterButtonPopup(true);
          }}
        />
      )}
      {showRegisterButtonPopup && (
        <RegisterButtonPopup
          onClose={() => setShowRegisterButtonPopup(false)}
          onRegisterSuccess={handleRegister}
        />
      )}

      <div className={styles.spacer} />
      {isLoggedIn ? (
        <div className={styles.buttonContainerlogin}>
          <StandardBtn text={"Logout"} onClick={handleLogout} />
        </div>
      ) : (
        <>
          <div className={styles.buttonContainer}>
            <StandardBtn
              text={"Login"}
              onClick={() => {
                closePopups();
                setShowLoginButtonPopup(true);
              }}
              style={{ fontWeight: 500 }}
            />
          </div>
          <div className={styles.spacer} />
          <StandardBtn
            text={"Register"}
            onClick={() => {
              closePopups();
              setShowRegisterButtonPopup(true);
            }}
            style={{ fontWeight: 500 }}
          />
        </>
      )}
      <div className={styles.spacer} />
      <Link to="/game" className={styles.gameLink} onClick={scrollToTop}>
        <StandardBtn
          text={"Game"}
          onClick={() => closePopups()}
          style={{ fontWeight: 500 }}
        />
      </Link>
      <div className={styles.marginright} />
    </div>
  );
}

export default NavBarRight;
