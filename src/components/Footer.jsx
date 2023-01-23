import React from "react";
import "./Footer.css";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container__insta">
        <p>Visita nuestro Instagram</p>
        <a href="https://www.instagram.com/crea.planeta/" target="__blank">
          <AiOutlineInstagram className="logo-insta-footer" />
        </a>
      </div>
      <div>
        <p>Todos los derechos reservados.</p>
        <p>
          © 2022 Desarrollo y Diseño Web por{" "}
          <a
            href="https://www.instagram.com/agencia.drc/"
            className="url-agencia-drc"
            target="__blank"
          >
            Agencia DRC
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
