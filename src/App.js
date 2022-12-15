import "./App.css";
import Inicio from "./pages/Inicio/Inicio";
import Objetivos from "./pages/Objetivos/Objetivos";
import Personas from "./pages/Personas/Personas";
import Portafolio from "./pages/Portafolio/Portafolio";
import Contacto from "./pages/Contacto/Contacto";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Navbar2";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/objetivos" element={<Objetivos />} />
          <Route exact path="/personas" element={<Personas />} />
          <Route exact path="/portafolio" element={<Portafolio />} />
          <Route exact path="/contacto" element={<Contacto />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
