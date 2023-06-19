import { Link } from "react-router-dom";
import img from "./cute-and-happy-dog.png";
import "./landing.styles.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <h1 className="welcome-title">Welcome</h1>
      <div className="image-container">
        <img src={img} alt="" className="small-image" />
      </div>
      <Link to="/home">
        <button className="start-button">Iniciar</button>
      </Link>
    </div>
  );
};

export default Landing;
