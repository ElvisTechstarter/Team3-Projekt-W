import React, { createContext, useState } from "react";

// Erstellen des AuthContexts
const AuthContext = createContext();

// AuthProvider-Komponente, die den Zustand des Login-Status verwaltet
export const AuthProvider = ({ children }) => {
  // Zustand für den Login-Status und Funktionen zum Ein- und Ausloggen
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState(0);

  const login = () => {
    // Implementiere hier die Logik für den Login
    setIsLoggedIn(true);
    setUserID(2);
  };

  const logout = () => {
    // Implementiere hier die Logik für den Logout
    setIsLoggedIn(false);
    setUserID(0);
  };

  // Bereitstellen des AuthContexts für Kinderkomponenten mit dem aktuellen Login-Status und den Login-/Logout-Funktionen
  return (
    <AuthContext.Provider value={{ isLoggedIn, userID, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
