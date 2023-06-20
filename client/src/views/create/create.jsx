import React, { useState } from "react";
import axios from "axios";
import "./create.styles.css";

const Create = () => {
  const [input, setInput] = useState({
    name: "",
    image: "",
    height: "",
    weight: "",
    life_span: "",
  });

  const [error, setError] = useState({
    name: "",
    image: "",
    height: "",
    weight: "",
    life_span: "",
  });

  const validate = (input) => {
    let validationError = {};

    if (input.name === "" || input.name.trim().length === 0) {
      validationError.name = "Ingrese un nombre por favor";
    }

    if (input.image === "" || !input.image.endsWith(".jpg")) {
      validationError.image =
        "Ingrese un enlace de imagen válido que termine en '.jpg'";
    }

    if (!/^\d+$/.test(input.height)) {
      validationError.height = "Ingrese una altura válida";
    }

    if (!/^\d+$/.test(input.weight)) {
      validationError.weight = "Ingrese un peso válido";
    }

    if (!/^\d+$/.test(input.life_span)) {
      validationError.life_span = "Ingrese años de vida válidos";
    }

    return validationError;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setError(validate({ ...input, [name]: value }));
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
          <label htmlFor="image">Imagen:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={input.image}
            onChange={handleChange}
          />
          {error.image && <p className="error">{error.image}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="height">Altura:</label>
          <input
            type="text"
            id="height"
            name="height"
            value={input.height}
            onChange={handleChange}
          />
          {error.height && <p className="error">{error.height}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="weight">Peso:</label>
          <input
            type="text"
            id="weight"
            name="weight"
            value={input.weight}
            onChange={handleChange}
          />
          {error.weight && <p className="error">{error.weight}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="life_span">Años de vida:</label>
          <input
            type="text"
            id="life_span"
            name="life_span"
            value={input.life_span}
            onChange={handleChange}
          />
          {error.life_span && <p className="error">{error.life_span}</p>}
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