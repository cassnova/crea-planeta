import React from "react";
import Nav from "../../components/Navbar2";
import { motion as m } from "framer-motion";
import "./Trayectoria.css";

const Trayectoria = () => {
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
        className="titulo-trayectoria"
      >
        TRAYECTORIA
      </m.h2>

      <hr />

      <h3>
        Nuestra misión es promover un mayor conocimiento de nuestros ecosistemas
        con experiencias inmersivas en encuentros locales, nacionales e
        internacionales. Hemos participado en foros y exhibiciones en Sundance
        Film Festival, Mediamorfosis, Día Mundial del Océano en el Senado,
        Congreso Futuro, Stereopsia Latam, Santiago Festival Internacional de
        Cine SANFIC, Web Fest, ferias ambientales y científicas regionales,
        encuentros con estudiantes, entre muchos otros. Contamos con el apoyo
        oficial de UNESCO y hemos sido reconocidos como una actividad ONU
        Decenio 2030 de los Océanos con nuestra serie Cultura Oceánica en 360°.
      </h3>
    </m.div>
  );
};

export default Trayectoria;
