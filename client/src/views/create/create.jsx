import React, { useState, useEffect } from "react";
import axios from "axios";
import "./create.styles.css";
import img from "../../img/icons8-casa-50.png"
import {Link} from "react-router-dom";
const Create = () => {
  const [input, setInput] = useState({
    name: "",
    image: "",
    height: "",
    weight: "",
    life_span: "",
    temperament: ""
  });

  const [error, setError] = useState({
    name: "",
    image: "",
    height: "",
    weight: "",
    life_span: "",
    temperament: ""
  });

  const [tempForm, setTempForm] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/temperament")
      .then((res) => {
        setTempForm(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

  const handleTemperaments = (event) => {
    const selectedTemperament = tempForm.find((item) => item.name === event.target.value);

    setInput((prevState) => ({
      ...prevState,
      temperament: selectedTemperament.name,
    }));

    setError(validate({ ...input, temperament: selectedTemperament.name }));
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
    axios.post("http://localhost:3001/dogs", input)
      .then((res) => {
        alert("Su perro ha sido creado correctamente.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
  <div className="form-container">
<div className="icon-container">
       <Link to ={`/home`} className="home-link">
  <img src={img} alt="" /> HOME
</Link>
</div>

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
          <label htmlFor="temperament">Temperamentos:</label>
          <select id="temperament" name="temperament" onChange={handleTemperaments}>
            <option value="default">Choose</option>
            {tempForm?.map((item) => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          {error.temperament && <p className="error">{error.temperament}</p>}
        </div>
        {Object.keys(error).length === 0 && (
          <button type="submit" className="submit-button">
            Crear Raza
          </button>
        )}
        {/* <div className="image-container">
          <img src={img} alt="" />
        </div> */}

      </form>
    </div>
  );
};

export default Create;
