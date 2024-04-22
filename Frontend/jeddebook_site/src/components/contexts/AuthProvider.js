import React, { createContext, useState } from "react";
import axios from "axios";

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
      const response = await axios.get(
        "http://localhost:5050/v1/user/profile/userhistory",
        {
          params: { userid: inputID },
        }
      );
      console.log(response);
      setUserHistory(response.data.userHistoryEntries);
    } catch (error) {
      console.error("Fehler bei der Anfrage:", error.message);
    }
  };

  const login = () => {
    // Implementiere hier die Logik für den Login
    setIsLoggedIn(true);
    //ersetze die loginlogik hier
    const newUserId = 2;
    setUserID(newUserId);
    getUserHistory(newUserId);
  };

  const logout = () => {
    // Implementiere hier die Logik für den Logout
    setIsLoggedIn(false);
    setUserID(0);
  };

  // Bereitstellen des AuthContexts für Kinderkomponenten mit dem aktuellen Login-Status und den Login-/Logout-Funktionen
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userID, login, logout, userHistory, setUserHistory }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
