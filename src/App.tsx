import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";
import CardInfo from "./models/CardInfo";
import MathEnJeu from "./pages/Projects/MathEnJeu/MathEnJeu";
import Lightbeans from "./pages/Projects/EyeDesigner/EyeDesigner";
import EyeDesigner from "./pages/Projects/EyeDesigner/EyeDesigner";

function App() {
  const [cards] = useState<CardInfo[]>([
    {
      name: "eyeDesigner",
      url: "/eyeDesigner",
      description: "jeu  sur watchOS",
    },
    {
      name: "Lightbeans",
      url: "/lightbeans",
      description: "visualisation de matériaux",
    },
    {
      name: "Math en jeu",
      url: "/mathEnJeu",
      description: "jeu vidéo éducatif",
    },
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Main cards={cards} />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/mathEnJeu" element={<MathEnJeu />}></Route>
            <Route path="/eyeDesigner" element={<EyeDesigner />}></Route>
            <Route path="/lightbeans" element={<Lightbeans />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
