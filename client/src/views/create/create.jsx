import { useState } from "react";

function Create() {
  const [input, setInput] = useState({
    name: "",
    altura: "",
    peso: "",
    añosDeVida: ""
  });

  const [error, setError] = useState({
    name: "",
    altura: "",
    peso: "",
    añosDeVida: ""
  });

  const validate = (input) => {
    let validationError = {};

    if (input.name === "" || input.name[0].trim().length === 0) {
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
    if (Object.keys(error).length === 0) {
      alert("¡Todo está bien!");
    } else {
      alert("Faltan datos o hay errores en el formulario");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "16rem"
      }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input name="name" value={input.name} onChange={handleChange} />
          {error.name && <p>{error.name}</p>}
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
        {Object.keys(error).length === 0 && <button type="submit">ENVIAR</button>}
      </form>
    </div>
  );
}

export default Create;