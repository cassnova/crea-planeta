import React from "react";
import Nav from "../../components/Navbar2";
import "./Inicio.css";

const Inicio = () => {
  return (
    <div>
      <Nav />
      <header className="header-container">
        <div className="header-container__titles">
          <h1>CREA Planeta</h1>
          <h2>Centro de Realidades Alternativas</h2>
          <p>
            "Cambiamos la relación de las personas con el planeta con
            experiencias inmersivas, innovadoras y de base científica."
          </p>
        </div>
      </header>
    </div>
  );
};

export default Inicio;
