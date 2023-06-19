import {Link} from "react-router-dom"


const Landing=()=> {
    return (
      <div>

        <h1>Inicio de mi app</h1>
        <img src="./_107435681_perro1.jpg" alt="dog" />
        <Link to="/home">
        <button>Iniciar</button>
        </Link>
      </div>
    );
  }
  
  export default Landing;
  