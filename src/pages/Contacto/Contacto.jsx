import React from "react";
import Nav from "../../components/Navbar2";
import ContactForm from "../../components/ContactForm";
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
          <ContactForm />
          <div className="correo-container">
            <h4>ESCRÍBENOS A NUESTRO CORREO</h4>
            <p>contacto.crea.planeta@gmail.com</p>
          </div>
          <h4>VISITA NUESTRO INSTAGRAM</h4>
          <a href="https://www.instagram.com/crea.planeta/" target="__blank">
            <AiOutlineInstagram className="logo-insta" />
          </a>
          <div className="numeros-container">
            <h4>ESCRÍBENOS</h4>
            <p>+569 79872489 </p>
            <p>+569 94449452 </p>
          </div>
        </div>
      </section>
    </m.div>
  );
};

export default Contacto;
