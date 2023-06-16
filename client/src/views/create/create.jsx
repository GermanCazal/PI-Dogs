import { useState } from "react";

function Create() {

const [input, setInput]= useState({
  name:"",
  altura:"",
  peso:"",
  añosDeVida:""
});

const [error, setError]= useState({
  name:"",
  altura:"",
  peso:"",
  añosDeVida:""
})

const validate = (input) => {
  let validationError = {}

  if (input.name === "" || input.name[0].trim().length === 0) {
    validationError.name = "Ingrese un nombre por favor"
  }

  return validationError
}


const handleChange =(event)=>{
  setInput({
    ...input,
    [event.target.name]: event.target.value,
  })
  setError(
    validate({
      ...input,
      [event.target.name]: event.target.value,
    })
  )
}


const handleSubmuit= (event)=>{
  event.preventDefault()
  if(Object.keys(error).length ===0){
    alert("todo bien")
  }else{
    alert ("Faltan datos")
  }
}
// console.log ("ESTE ES EL INPUT", input)

    return (
      <div 
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "16rem",
      }}>
        <form onSubmit={handleSubmuit}>
          <div>
            <label>Nombre:</label>
            <input name="name" value={input.name} onChange={handleChange}/>
          </div>
          <div>
            <label>Altura:</label>
            <input name="altura" value={input.altura} onChange={handleChange}/>
          </div>
          <div>
            <label>Peso:</label>
            <input name="peso" value={input.peso} onChange={handleChange}/>
          </div>
          <div>
            <label>Años de vidas:</label>
            <input name="añosDeVida" value={input.añosDeVida} onChange={handleChange}/>
          </div>
          {Object.keys(error).length === 0 ? (
          <button type="submit">ENVIAR</button>
        ) : null}
        </form>
      </div>
    );
}

export default Create;