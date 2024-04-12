import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/layout/navbar";
import "./styles/App.css";
import "./styles/GlobalVars.css";
import HomePage from "./pages/home-page";
import ImpressumPage from "./pages/impressum";
import Content from "./components/layout/content";
import Footer from "./components/layout/footer";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Content>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
        </Routes>
      </Content>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
