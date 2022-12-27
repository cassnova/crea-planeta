import React from "react";
import Nav from "../../components/Navbar2";
import "./Contacto.css";
import { motion as m } from "framer-motion";
import { AiOutlineInstagram } from "react-icons/ai";

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
          <h3>¡CONVERSEMOS!</h3>
          <p>contacto.crea.planeta@gmail.com</p>
          <h4>VISITA NUESTRO INSTAGRAM</h4>
          <a href="https://www.instagram.com/crea.planeta/" target="__blank">
            <AiOutlineInstagram className="logo-insta" />
          </a>
        </div>

        {/* <div className="container-contacto__card">
          <h3>PILAR MUÑOZ</h3>
          <h4>PILAR.MUÑOZ@UV.CL</h4>
          <h5>+569 94449452</h5>
          <p>@FACIMARUV</p>
          <img src={LogoUValpo} alt="Logo Almagico VR" />
        </div> */}
      </section>
    </m.div>
  );
};

export default Contacto;
