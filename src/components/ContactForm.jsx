import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {};

    if (!name) {
      formErrors.name = "El nombre es requerido";
    }

    if (!email) {
      formErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email inválido";
    }

    if (!phone) {
      formErrors.phone = "El teléfono es requerido";
    } else if (phone.length !== 10) {
      formErrors.phone = "El teléfono debe tener 10 dígitos";
    }

    if (!message) {
      formErrors.message = "El mensaje es requerido";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Enviar formulario a través de un servicio de terceros aquí
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="phone">Teléfono</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
      <div>
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && <span className="error">{errors.message}</span>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;
