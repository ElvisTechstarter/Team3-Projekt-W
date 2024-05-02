import React, { createContext, useState } from "react";
import { UserQueries } from "../apis/jeddebook/user";
import { UserMutations } from "../apis/jeddebook/user";

// Erstellen des AuthContexts
const AuthContext = createContext();

// AuthProvider-Komponente, die den Zustand des Login-Status verwaltet
export const AuthProvider = ({ children }) => {
  // Zustand für den Login-Status und Funktionen zum Ein- und Ausloggen
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState(0);
  const [userHistory, setUserHistory] = useState([]);

  const getUserHistory = async (inputID) => {
    if (!inputID) {
      console.log("userID not found");
      return;
    }
    try {
      // Sende die Daten an deinen Express-Server
      //console.log("request for userhistory with inputID=", inputID);
      const params = { userid: inputID };
      const response = await UserQueries.getUserHistory(params);
      //console.log(response);
      setUserHistory(response.data.userHistoryEntries);
    } catch (error) {
      console.error("Fehler bei der Anfrage:", error.message);
    }
  };

  const login = async (username, password, onLoginSuccess, setLoginMessage) => {
    // Implementiere hier die Logik für den Login
    try {
      const body = {
        username,
        password,
      };

      const response = await UserMutations.loginUser(body);

      //nutze die userid
      if (response.status === 200) {
        const newUserId = response.data.user.id;
        setLoginMessage("Login successful!");
        setUserID(newUserId);
        getUserHistory(newUserId);
        setIsLoggedIn(true);
        onLoginSuccess();
      } else {
        setLoginMessage(
          "Login failed. Please check your credentials and try again."
        );
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setLoginMessage("Username/Password does not match.");
      } else if (error.code === "ECONNREFUSED") {
        setLoginMessage(
          "Connection refused. Please check the server availability."
        );
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
      value={{
        isLoggedIn,
        userID,
        login,
        logout,
        userHistory,
        setUserHistory,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
