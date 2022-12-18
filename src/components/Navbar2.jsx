import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar2.css";
import Logo from "../logo-prueba.svg";

const Nav = () => {
  const [clicked, setClicked] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "var(--tertiary)" : "",
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <nav className="nav-container">
      <NavLink to="/">
        <img src={Logo} alt="Logo LarnU" className="logo" />
      </NavLink>

      <ul className={clicked ? "active" : null}>
        <li>
          <NavLink style={navLinkStyles} to="/">
            INICIO
          </NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyles} to="/personas">
            PERSONAS
          </NavLink>
        </li>
        {/* <li>
          <NavLink style={navLinkStyles} to="/objetivos">
            OBJETIVOS
          </NavLink>
        </li> */}
        <li>
          <NavLink style={navLinkStyles} to="/portafolio">
            PORTAFOLIO
          </NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyles} to="/contacto">
            CONTACTO
          </NavLink>
        </li>
      </ul>

      <div id="mobile">
        <i
          id="bar"
          className={`fas fa-bars ${clicked ? "fas fa-times" : "fas fa-bars"}`}
          onClick={() => setClicked(!clicked)}
        ></i>
      </div>
    </nav>
  );
};

export default Nav;
