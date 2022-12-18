import React from "react";
import Nav from "../../components/Navbar2";
import "./Contacto.css";
import { motion as m } from "framer-motion";
import LogoAlmagico from "../../logo-almagico.webp";
import LogoUValpo from "../../logo-uvalpo.webp";

const Contacto = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Nav />
      <m.h2
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
      >
        CONTACTO
      </m.h2>
      <hr />
      <section className="container-contacto">
        <div className="container-contacto__card">
          <h3>CRISTOBAL ALMAGIA</h3>
          <h4>CALMAGIA@GMAIL.COM</h4>
          <h5>+569 79872489</h5>
          <p>@ALMAGICOVR</p>
          <img src={LogoAlmagico} alt="Logo Almagico VR" />
        </div>

        <div className="container-contacto__card">
          <h3>PILAR MUÑOZ</h3>
          <h4>PILAR.MUÑOZ@UV.CL</h4>
          <h5>+569 94449452</h5>
          <p>@FACIMARUV</p>
          <img src={LogoUValpo} alt="Logo Almagico VR" />
        </div>
      </section>
    </m.div>
  );
};

export default Contacto;
