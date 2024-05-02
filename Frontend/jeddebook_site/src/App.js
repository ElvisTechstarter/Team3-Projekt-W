import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/layout/navbar";
import "./styles/GlobalVars.css";
import HomePage from "./pages/home-page";
import LoggedInPage from "./pages/loggedin-page";
import GamePage from "./pages/game-page";
import ImpressumPage from "./pages/impressum-page";
import Agbpage from "./pages/agb-page";
import DatenschutzPage from "./pages/datenschutz-page";
import Content from "./components/layout/content";
import Footer from "./components/layout/footer";
import { AuthProvider } from "./contexts/AuthProvider";
import { SearchProvider } from "./contexts/SearchProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SearchProvider>
          <div>
            <NavigationBar />
            <Content>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/loggedin" element={<LoggedInPage />} />
                <Route path="/game" element={<GamePage />} />
                <Route path="/impressum" element={<ImpressumPage />} />
                <Route path="/agb" element={<Agbpage />} />
                <Route path="/datenschutz" element={<DatenschutzPage />} />
              </Routes>
            </Content>
            <Footer />
          </div>
        </SearchProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
