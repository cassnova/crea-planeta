import React from "react";
import Nav from "../../components/Navbar2";
import { motion as m } from "framer-motion";
import "./Personas.css";
import LogoAlmagico from "../../logo-almagico.webp";
import LogoUValpo from "../../logo-uvalpo.webp";
import Ksenia from "../../ksenia.webp";
import Javiera from "../../javi-saavedra.webp";
import Mauricio from "../../mauricio.webp";
import Cristobal from "../../cristobal.webp";
import Pilar from "../../pilar.webp";
import Bernardita from "../../bernardita.webp";
import Pedro from "../../pedro.webp";
import Daniel from "../../daniel-rojas.webp";
import Jetzabel from "../../jetzabel-moreno.webp";
import Marcia from "../../marcia-tomassoni.webp";
import Paulina from "../../paulina-larrondo.webp";

const Personas = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Nav />
      <m.h2
        className="titulo-representantes"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
      >
        REPRESENTANTES
      </m.h2>
      <hr />
      <section className="representantes-container">
        <div className="representante-1">
          <div className="representante-container-img-title">
            <div className="representante-container-img-title__img">
              <img src={Cristobal} alt="Foto Cristobal" />
            </div>
            <div className="representante-container-img-title__txt">
              <h3>CRISTÓBAL ALMAGIÁ</h3>
              <h4>DIRECTOR</h4>
              <h5>PRODUCTOR EJECUTIVO</h5>
            </div>
          </div>
          <div className="representante-container-desc">
            <p>
              Ingeniero Comercial con estudios en Cinematografía en Centro
              Sperimentale di Cinematografía (Roma- Italia), y de producción
              audiovisual en EAVE (Europa); Escuela San Antonio de los Baños
              (Cuba) entre varios otros. Socio Fundador de Almagico VR, centro
              inmersivo orientado al desarrollo proyectos VR 360 para promover
              la sustentabilidad, y la reflexión del vínculo del ser humano con
              la naturaleza, entregando experiencias que impactan y conmueven a
              las audiencias.
            </p>
          </div>
          <div className="representante-container-logo">
            <img src={LogoAlmagico} alt="Logo Almagico VR" />
          </div>
        </div>

        <div className="representante-1">
          <div className="representante-container-img-title">
            <div className="representante-container-img-title__img">
              <img src={Pilar} alt="Foto Pili" />
            </div>
            <div className="representante-container-img-title__txt">
              <h3>PILAR MUÑOZ MUGA</h3>
              <h4>DIRECTORA CIENTÍFICA</h4>
            </div>
          </div>
          <div className="representante-container-desc">
            <p>
              Bióloga Marina de la Universidad de Valparaíso. Directora del
              Laboratorio de Algas Marinas, docente de la Escuela de Biología
              Marina. Editora en Jefe de la Revista de Biología Marina y
              Oceanografía (indexada en Web of Science). Participa además de
              varias iniciativas de vinculación con el medio que combinan
              innovación, creatividad y ciencia, tal como el documental
              inmersivo Cultura Oceánica en 360°. Es Magister en Oceanografía y
              es la única chilena perteneciente al Grupo de Expertos sobre
              Alfabetización Oceánica de la Comisión Oceanográfica
              Intergubernamental de UNESCO.
            </p>
          </div>
          <div className="representante-container-logo">
            <img src={LogoUValpo} alt="Logo U. de Valpo" />
          </div>
        </div>
      </section>

      <m.h2
        className="titulo-representantes"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
      >
        ESPECIALIDADES POR PROYECTOS
      </m.h2>
      <hr />

      <section className="especialistas">
        <div className="representante-1">
          <div className="representante-container-img-title">
            <div className="representante-container-img-title__img">
              <img src={Bernardita} alt="Foto Bernardita" />
            </div>
            <div className="representante-container-img-title__txt">
              <h3>BERNARDITA SKINNER</h3>
              <h4>GUIÓN</h4>
              <h5>PRODUCCIÓN PERIODISTICA</h5>
            </div>
          </div>
          <div className="representante-container-desc">
            <p>
              Periodista, Magíster en Arte mención Patrimonio. Docente de
              periodismo científico, miembro de la Asociación Chilena de
              Periodistas Científicos, ACHIPEC y de Asociación Nacional de
              Escritores de Ciencia de Estados Unidos, NASW. Posee experiencia
              en televisión, proyectos audiovisuales, medios escritos e
              investigación en identidad, patrimonio y divulgación científica.
            </p>
          </div>
        </div>

        <div className="representante-1">
          <div className="representante-container-img-title">
            <div className="representante-container-img-title__img">
              <img src={Pedro} alt="Foto Pedro" />
            </div>
            <div className="representante-container-img-title__txt">
              <h3>PEDRO PEÑA</h3>
              <h4>DIRECCIÓN DE FOTOGRAFÍA 360</h4>
              <h5>POSTPRODUCCIÓN</h5>
            </div>
          </div>
          <div className="representante-container-desc">
            <p>
              Comunicador audiovisual DuocUC , con estudios de especialización
              en post-producción. Amplia experiencia en la filmación, edición y
              post-producción de contenidos audiovisuales inmersivos 360, y
              ferias y festivales para promover la educación y la sostenibilidad
              planetaria.
            </p>
          </div>
        </div>

        <div className="representante-1">
          <div className="representante-container-img-title">
            <div className="representante-container-img-title__img">
              <img src={Mauricio} alt="Foto Mauricio" />
            </div>
            <div className="representante-container-img-title__txt">
              <h3>MAURICIO LÓPEZ</h3>
              <h4>DIRECCIÓN REALIDAD VIRTUAL (“104,5° MOLÉCULA DE LA VIDA”)</h4>
            </div>
          </div>
          <div className="representante-container-desc">
            <p>
              Tecnólogo creativo e incansable promotor de las tecnologías
              inmersivas. Fundador de OsoBorroso, una empresa dedicada al
              desarrollo de experiencias digitales para cultura, marketing y
              eventos. Premiado por la Mejor Experiencia Educativa VR (Crystal
              Owl, Chile-Bélgica), primer lugar por Mejor Filtro AR (QLD XR,
              Australia), bronce por el Mejor Espacio VR (Mozilla Hubs, EE.UU.),
              entre otros. Asistente regular de festivales mundiales de AR y VR.
            </p>
          </div>
        </div>

        <div className="representante-1">
          <div className="representante-container-img-title">
            <div className="representante-container-img-title__img">
              <img src={Ksenia} alt="Foto Ksenia" />
            </div>
            <div className="representante-container-img-title__txt">
              <h3>KSENIA MARENNIKOVA</h3>
              <h4>
                DIRECCIÓN DE REALIDAD AUMENTADA (“104,5° MOLÉCULA DE LA VIDA”)
              </h4>
            </div>
          </div>
          <div className="representante-container-desc">
            <p>
              Publicista, productora de experiencias inmersivas comerciales y
              socia en OsoBorroso. Ha realizado proyectos para EA Sports FIFA 23
              • Wimbledon Championships • World Rugby • WWF • Nike • Pepsi •
              Nivea • Budweiser • Red Bull • Monster Energy • Líder (Walmart) •
              Loncoleche, entre otros. Varios de ellos fueron finalistas y
              ganadores en concursos de creatividad en cinco continentes.
              Participante de talleres y festivales de las narrativas XR
              europeos y latinoamericanos.
            </p>
          </div>
        </div>

        <div className="representante-1">
          <div className="representante-container-img-title">
            <div className="representante-container-img-title__img">
              <img src={Javiera} alt="Foto Javiera" />
            </div>
            <div className="representante-container-img-title__txt">
              <h3>JAVIERA SAAVEDRA</h3>
              <h4>PRENSA</h4>
            </div>
          </div>
          <div className="representante-container-desc">
            <p>
              Periodista y Licenciada en Comunicación Social de la Universidad
              de Playa Ancha . Especializada en prensa radial y periodismo
              científico. Se desempeña en prensa y medios de comunicación
              digitales de alcance nacional. Posee estudios en importancia del
              paisaje sonoro y cuidado del medio ambiente.
            </p>
          </div>
        </div>

        <div className="representante-1">
          <div className="representante-container-img-title">
            <div className="representante-container-img-title__img">
              <img src={Paulina} alt="Foto Javiera" />
            </div>
            <div className="representante-container-img-title__txt">
              <h3>PAULINA LARRONDO</h3>
              <h4>RELACIONAMIENTO COMUNITARIO</h4>
            </div>
          </div>
          <div className="representante-container-desc">
            <p>
              Psicóloga y académica con mas de 15 años de experiencia impulsando
              procesos de transformación en personas, comunidades y
              organizaciones en temáticas de genero y medioambiente. Directora
              del proyecto 'Hierbas de Mar' de la Facultad de Medicina de la
              Universidad de Chile, para poner en valor el oficio alguero y a
              este superalimento.
            </p>
          </div>
        </div>

        <div className="representante-1">
          <div className="representante-container-img-title">
            <div className="representante-container-img-title__img">
              <img src={Marcia} alt="Foto Javiera" />
            </div>
            <div className="representante-container-img-title__txt">
              <h3>MARCIA TOMASSONI</h3>
              <h4>COORDINACIÓN</h4>
            </div>
          </div>
          <div className="representante-container-desc">
            <p>
              Licenciada en Biologia Marina. Con experiencia en Investigación y
              apoyo en proyectos de Pesca y Acuicultura. Analista de Medio
              Ambiente en consultoria medioambiental y como Analista de
              Fitoplancton y coordinadora de proyectos en Programa de
              Conservación de Humedales en la quinta región y colaboración en
              Comité Ambiental de Puerto Varas.
            </p>
          </div>
        </div>

        <div className="representante-1">
          <div className="representante-container-img-title">
            <div className="representante-container-img-title__img">
              <img src={Jetzabel} alt="Foto Javiera" />
            </div>
            <div className="representante-container-img-title__txt">
              <h3>JETZABEL MORENO</h3>
              <h4>PRODUCCIÓN</h4>
            </div>
          </div>
          <div className="representante-container-desc">
            <p>
              Periodista y Licenciada en Comunicación Social de la Universidad
              de Playa Ancha. Especializada en prensa radial y periodismo
              científico. Se desempeña en prensa y medios de comunicación
              digitales de alcance nacional. Posee estudios en importancia del
              paisaje sonoro y cuidado del medio ambiente.
            </p>
          </div>
        </div>

        <div className="representante-1">
          <div className="representante-container-img-title">
            <div className="representante-container-img-title__img">
              <img src={Daniel} alt="Foto Daniel Rojas" />
            </div>
            <div className="representante-container-img-title__txt">
              <h3>DANIEL ROJAS</h3>
              <h4>DESARROLLADOR WEB</h4>
            </div>
          </div>
          <div className="representante-container-desc">
            <p>
              Desarrollador de Software, Músico, Productor Musical y DJ. Combina
              sus habilidades técnicas y creativas para crear experiencias
              únicas y emocionantes. Artista creador multifacético, que combina
              su pasión por la música con su habilidad para el desarrollo de
              software, para crear experiencias innovadoras.
            </p>
          </div>
        </div>

        <hr />
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
      </section>
    </m.div>
  );
};

export default Personas;
