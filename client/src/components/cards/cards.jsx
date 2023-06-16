import "./cards.styles.css"
import {Link} from "react-router-dom";


function Cards({user}) {
  const{imagen,name,temperaments,altura,id}= user;
    return (
      <div className="card-container">
       <h1>{name}</h1>
      <Link to ={`/home/${id}`}>
       <img src={imagen} alt={name} />
        </Link>
       <p>{temperaments}</p>
       <p>{altura}</p>

      </div>
    );
  }
  

export default Cards;