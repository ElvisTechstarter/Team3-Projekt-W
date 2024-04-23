import React, { createContext, useState } from "react";
import axios from "axios";

// Erstellen des AuthContexts
const AuthContext = createContext();

// AuthProvider-Komponente, die den Zustand des Login-Status verwaltet
export const AuthProvider = ({ children }) => {
  // Zustand für den Login-Status und Funktionen zum Ein- und Ausloggen
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState(0);

  const login = async (username, password, onLoginSuccess, setLoginMessage) => {
    // Implementiere hier die Logik für den Login
    try {
      const body = {
        username,
        password,
      };

      const response = await axios.post(
        "http://localhost:5050/v1/user/login",
        body
      );

      //nutze die userid
      if (response.status === 200) {
        setLoginMessage("Login successful!");
        setUserID(response.data.user.id);
        setIsLoggedIn(true);
        onLoginSuccess();
      } else {
        setLoginMessage(
          "Login failed. Please check your credentials and try again."
        );
      }
    } catch (error) {
      //console.error("Error:", error.message);
      if (error.response.status === 401) {
        setLoginMessage("Username/Password does not match.");
      } else {
        setLoginMessage("An error occurred. Please try again later.");
      }
    }
  };

  const logout = () => {
    // Implementiere hier die Logik für den Logout
    setIsLoggedIn(false);
    setUserID(0);
  };

  // Bereitstellen des AuthContexts für Kinderkomponenten mit dem aktuellen Login-Status und den Login-/Logout-Funktionen
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userID, login, logout, setIsLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
