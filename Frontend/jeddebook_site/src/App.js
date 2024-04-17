import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/layout/navbar";
import "./styles/App.css";
import "./styles/GlobalVars.css";
import HomePage from "./pages/home-page";
import ImpressumPage from "./pages/impressum-page";
import Content from "./components/layout/content";
import Footer from "./components/layout/footer";
import { AuthProvider } from "./components/contexts/AuthProvider";
import { SearchProvider } from "./components/contexts/SearchProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SearchProvider>
          <NavigationBar />
          <Content>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/impressum" element={<ImpressumPage />} />
            </Routes>
          </Content>
          <Footer />
        </SearchProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
