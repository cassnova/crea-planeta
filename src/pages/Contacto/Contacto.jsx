import React from "react";
import Nav from "../../components/Navbar2";
import { motion as m } from "framer-motion";

const Contacto = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Nav />
      <h2>Contacto</h2>
    </m.div>
  );
};

export default Contacto;
