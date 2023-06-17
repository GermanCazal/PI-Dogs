import "./create.styles.css";
import axios from "axios";
import { useState } from "react";
function Create() {
  const [input, setInput] = useState({
    name: "",
    imagen:"",
    altura: "",
    peso: "",
    añosDeVida: ""
  });

  const [error, setError] = useState({
    name: "",
    imagen:"",
    altura: "",
    peso: "",
    añosDeVida: ""
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
      validationError.imagen = "Ingrese un enlace de imagen válido que termine en '.jpg'";
    }
  
    return validationError;
  };

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
    setError(validate({
      ...input,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/dogs",input)
    .then(res=>alert("Su perro ha sido creado correctamente."))
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input name="name" value={input.name} onChange={handleChange} />
          {error.name && <p>{error.name}</p>}
        </div>
        <div>
              <label>Imagen:</label>
              <input name="imagen" value={input.imagen} onChange={handleChange} />
              {error.imagen && <p>{error.imagen}</p>}
        </div>

        <div>
          <label>Altura:</label>
          <input name="altura" value={input.altura} onChange={handleChange} />
          {error.altura && <p>{error.altura}</p>}
        </div>
        <div>
          <label>Peso:</label>
          <input name="peso" value={input.peso} onChange={handleChange} />
          {error.peso && <p>{error.peso}</p>}
        </div>
        <div>
          <label>Años de vida:</label>
          <input
            name="añosDeVida"
            value={input.añosDeVida}
            onChange={handleChange}
          />
          {error.añosDeVida && <p>{error.añosDeVida}</p>}
        </div>
        {Object.keys(error).length === 0 && <button type="submit">Crear Raza</button>}
      </form>
    </div>
  );
}

export default Create;