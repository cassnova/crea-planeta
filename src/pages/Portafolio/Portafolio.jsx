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
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Nav />
      <m.h2
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
        className="titulo-portafolio"
      >
        PORTAFOLIO
      </m.h2>
      <m.p
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
        className="portafolio-p"
      >
        Tenemos un fascinante portafolio de proyectos realizados y en
        producción, que nos abren nuevas dimensiones sobre el planeta, nuestra
        biodiversidad y recursos naturales.
      </m.p>
      <hr />
      <section>
        {/* <div className="explora-container">
          <div>
            <h2>EXPLORA EN 360°</h2>
          </div>
          <div className="explora-container__locaciones">
            <h3>ANTÁRTICA</h3>
            <h3>ATACAMA</h3>
            <h3>RAPA NUI</h3>
            <h3>JUAN FERNÁNDEZ</h3>
          </div>
        </div> */}
        <div className="oceanica-container">
          <h2>CULTURA OCEÁNICA</h2>
        </div>
        <div>
          <p className="portafolio-infos">
            <strong>Estado:</strong> Finalizado.
          </p>
          <p className="portafolio-infos">
            <strong>Resumen:</strong> : Miniserie inmersiva de 7 principios de
            UNESCO sobre la Cultura Oceánica. Un viaje a través del corazón del
            Pacífico para entender la relación que nos ejercemos mutuamente
            entre humanos y el océano. Posee el apoyo oficial de UNESCO y es
            parte de las actividades de las Naciones Unidas para la década del
            océano 2020-2030.
          </p>
          <p className="portafolio-infos">
            <strong>Formato:</strong> Video 360, Interactivo.
          </p>
        </div>
        <hr className="linea-separacion" />
        <div className="molecula-container">
          <h2>104.5°</h2>
          <h3>MOLÉCULA DE LA VIDA</h3>
        </div>
        <div>
          <p className="portafolio-infos">
            <strong>Estado:</strong> En producción
          </p>
          <p className="portafolio-infos">
            <strong>Resumen:</strong> Un viaje por el universo a escala atómica
            te convertirá en la molécula de la vida, el agua. Desde allí
            viajarás a través de glaciares, humedales, bosques de algas marinas
            y conocerás como el agua vive e interactúa dentro de la naturaleza y
            de ti mismo, y por qué es esencial para la vida y para nuevas
            fuentes de energías.
          </p>
          <p className="portafolio-infos">
            <strong>Formato:</strong> Interactivo, Realidad Virtual, Video 360.
          </p>
        </div>
        <hr className="linea-separacion" />
        <div className="luca-container">
          <h2>L.U.C.A.</h2>
        </div>
        <div>
          <p className="portafolio-infos">
            <strong>Estado:</strong> En producción
          </p>
          <p className="portafolio-infos">
            <strong>Resumen:</strong> En la búsqueda de nuestro antepasado común
            a todas las especies vivientes del planeta, recorreremos paisajes
            icónicos: Antártica, Desierto de Atacama, Rapa Nui y Archipiélago de
            Juan Fernández. Una aventura hacia el origen de la vida en nuestro
            planeta.
          </p>
          <p className="portafolio-infos">
            <strong>Formato:</strong> Animación y Video 360.
          </p>
        </div>
        <hr className="linea-separacion" />
        <div className="naufragio-container">
          <h2>NAUFRAGIOS</h2>
        </div>
        <div>
          <p className="portafolio-infos">
            <strong>Estado:</strong> En producción
          </p>
          <p className="portafolio-infos">
            <strong>Resumen:</strong> Acompañamos a Mery Perla, artista e
            instructora de buceo submarino, a través de naufragios que descansan
            en las costas del Pacífico, mientras escuchamos la voz en off de un
            curador e historiador marítimo. Los naufragios ampliarán nuestra
            mirada sobre estos artefactos como arquitectura submarina que
            también actúan como verdaderos arrecifes naturales que permiten
            acoger a organismos marinos.
          </p>
          <p className="portafolio-infos">
            <strong>Formato:</strong> Multiplataforma, video 360, interactivo.
          </p>
        </div>
        <hr className="linea-separacion" />
      </section>
    </m.div>
  );
};

export default Portafolio;
