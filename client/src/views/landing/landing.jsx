import { Link } from "react-router-dom";
import "./landing.styles.css";

const Landing = () => {
  return (
    <div className="landing-container">

      <div className="welcome-conteiner">
      <h1>Welcom</h1>
      <Link className="button" to="/home">
        Iniciar
      </Link>
      </div>

    </div>
  );
};

export default Landing;
