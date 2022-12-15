import React from "react";
import Nav from "../../components/Navbar2";
import "./Inicio.css";
import Footer from "../../components/Footer";

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
      <main className="main-container">
        <h3>NOSOTROS</h3>
        <p>
          CREA Planeta es una alianza entre científicos de la primera estación
          de biología marina de Sudamérica con un núcleo pionero de realidades
          inmersivas de la región de Valparaíso.
        </p>
        <p>
          Buscamos contribuir a la conservación de los ecosistemas, entregando
          experiencias significativas e inmersivas con base científica, que
          cambien la relación de las personas con el planeta.
        </p>
      </main>
      <section className="section-container">
        <h3>TECNOLOGÍAS PARA NUEVOS FUTUROS</h3>
      </section>
      <div className="section-container__p">
        <p>
          Utilizamos Realidades Inmersivas (Realidad Virtual, Video 360,
          Realidad Aumentada, XR) como una poderosa herramienta para transformar
          la relación de las personas con el planeta en base a narrativas
          apasionantes, basadas en innovación y ciencia.
        </p>
      </div>
      <div className="container-nuevas-realidades">
        <p>NUEVAS REALIDADES</p>
      </div>
      <Footer />
    </div>
  );
};

export default Inicio;
