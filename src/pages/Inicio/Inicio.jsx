import React from "react";
import Nav from "../../components/Navbar2";
import "./Inicio.css";
import { motion as m } from "framer-motion";

const Inicio = () => {
  function Scroll() {
    const section2 = document.querySelector("#nosotros");
    section2.scrollIntoView({ behavior: "smooth" });
  }

  // scrollBehavior.polyfill();

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Nav />
      <header className="header-container">
        <div className="header-container__titles">
          <m.h1
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5 }}
          >
            CREA Planeta
          </m.h1>
          <m.h2
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.6 }}
          >
            Centro de Realidades Alternativas
          </m.h2>
          <m.p
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.7 }}
          >
            "Cambiamos la relación de las personas con el planeta mediante
            experiencias inmersivas, innovadoras y de base científica."
          </m.p>
          <button className="btn-header" onClick={Scroll}>
            Sobre Nosotros
          </button>
        </div>
      </header>
      <main className="main-container" id="nosotros">
        <h3>NOSOTROS</h3>
        <p>
          CREA Planeta es una alianza entre científicos de la primera estación
          de biología marina de Sudamérica con un núcleo pionero de realidades
          inmersivas de la región de Valparaíso.
        </p>
        <p className="main-container_ultimo-p">
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
        <p>Transformamos información en experiencias</p>
      </div>
      {/* <Footer /> */}
      <div className="numeros-container">
        <h4>CONTACTOS</h4>
        <div>
          <p>Cristóbal Almagiá</p>
          <p>+569 79872489 </p>
        </div>
        <div>
          <p>Pilar Muñoz Muga</p>
          <p>+569 94449452 </p>
        </div>
      </div>
    </m.div>
  );
};

export default Inicio;
