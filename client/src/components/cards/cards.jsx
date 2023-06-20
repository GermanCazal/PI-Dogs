import "./cards.styles.css"
import {Link} from "react-router-dom";


function Cards({user}) {
  const{image,name,temperaments,height,id}= user;
    return (
      <div className="card-container">
       <h1>{name}</h1>
      <Link to ={`/home/${id}`}>
       <img src={image} alt={name} />
        </Link>
       <p>{temperaments}</p>
       <p>{height}</p>

      </div>
    );
  }
  

export default Cards;