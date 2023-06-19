import React, { useState } from "react";
import axios from "axios";
import "./create.styles.css";

const Create = () => {
  const [input, setInput] = useState({
    name: "",
    imagen: "",
    altura: "",
    peso: "",
    añosDeVida: ""
  });

  const [error, setError] = useState({
    name: "",
    imagen: "",
    altura: "",
    peso: "",
    añosDeVida: "",
    temperaments: ""
  });

  const validate = (input) => {
    let validationError = {};

    if (input.name === "" || input.name.trim().length === 0) {
      validationError.name = "Ingrese un nombre por favor";
    }

    if (!/^\d+$/.test(input.altura)) {
      validationError.altura = "Ingrese una altura válida";
    }

    if (!/^\d+$/.test(input.peso)) {
      validationError.peso = "Ingrese un peso válido";
    }

    if (!/^\d+$/.test(input.añosDeVida)) {
      validationError.añosDeVida = "Ingrese años de vida válidos";
    }

    if (input.imagen === "" || !input.imagen.endsWith(".jpg")) {
      validationError.imagen =
        "Ingrese un enlace de imagen válido que termine en '.jpg'";
    }

    return validationError;
  };

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
    setError(
      validate({
        ...input,
        [event.target.name]: event.target.value
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/dogs", input)
      .then((res) => alert("Su perro ha sido creado correctamente."));
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Crear Raza</h2>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
          {error.name && <p className="error">{error.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="imagen">Imagen:</label>
          <input
            type="text"
            id="imagen"
            name="imagen"
            value={input.imagen}
            onChange={handleChange}
          />
          {error.imagen && <p className="error">{error.imagen}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="altura">Altura:</label>
          <input
            type="text"
            id="altura"
            name="altura"
            value={input.altura}
            onChange={handleChange}
          />
          {error.altura && <p className="error">{error.altura}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="peso">Peso:</label>
          <input
            type="text"
            id="peso"
            name="peso"
            value={input.peso}
            onChange={handleChange}
          />
          {error.peso && <p className="error">{error.peso}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="añosDeVida">Años de vida:</label>
          <input
            type="text"
            id="añosDeVida"
            name="añosDeVida"
            value={input.añosDeVida}
            onChange={handleChange}
          />
          {error.añosDeVida && <p className="error">{error.añosDeVida}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="temperaments">Temperamentos:</label>
          <select id="temperaments" name="temperaments">
            <option value="malo">malo</option>
            <option value="dormilon">dormilon</option>
            <option value="jugueton">jugueton</option>
          </select>
        </div>
        {Object.keys(error).length === 0 && (
          <button type="submit" className="submit-button">
            Crear Raza
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
