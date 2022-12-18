import React from "react";
import Nav from "../../components/Navbar2";
import { motion as m } from "framer-motion";
import "./Portafolio.css";

const Portafolio = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Nav />
      <m.h2
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
      >
        PORTAFOLIO
      </m.h2>
      <hr />
      <section>
        <div className="explora-container">
          <div>
            <h2>EXPLORA EN 360°</h2>
          </div>
          <div className="explora-container__locaciones">
            <h3>ANTÁRTICA</h3>
            <h3>ATACAMA</h3>
            <h3>RAPA NUI</h3>
            <h3>JUAN FERNÁNDEZ</h3>
          </div>
        </div>
        <div className="molecula-container">
          <h2>104.5°</h2>
          <h3>MOLÉCULA DE LA VIDA</h3>
        </div>
      </section>
    </m.div>
  );
};

export default Portafolio;
