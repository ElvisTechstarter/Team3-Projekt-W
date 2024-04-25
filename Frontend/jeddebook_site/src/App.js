import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/layout/navbar";
import "./styles/App.css";
import "./styles/GlobalVars.css";
import HomePage from "./pages/home-page";
import LoggedInPage from "./pages/loggedin-page";
import GamePage from "./pages/game-page";
import ImpressumPage from "./pages/impressum-page";
import AGBPage from "./pages/agb-page";
import DatenschutzPage from "./pages/datenschutz-page";
import Content from "./components/layout/content";
import Footer from "./components/layout/footer";
import { AuthProvider } from "./components/contexts/AuthProvider";
import { SearchProvider } from "./components/contexts/SearchProvider";
import MyComponent from './components/MyComponent';
import ImageSearch from './components/ImageSearch'; // Hier wird ImageSearch importiert

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
                <Route path="/mycomponent" element={<MyComponent />} /> {/* Beispielroute für MyComponent */}
                <Route path="/imagesearch" element={<ImageSearch />} /> {/* Hier wird ImageSearch gerendert */}
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
    