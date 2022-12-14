import "./App.css";
import Inicio from "./pages/Inicio/Inicio";
import Objetivos from "./pages/Objetivos/Objetivos";
import Personas from "./pages/Personas/Personas";
import Portafolio from "./pages/Portafolio/Portafolio";
import Contacto from "./pages/Contacto/Contacto";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/objetivos" element={<Objetivos />} />
        <Route exact path="/personas" element={<Personas />} />
        <Route exact path="/portafolio" element={<Portafolio />} />
        <Route exact path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
