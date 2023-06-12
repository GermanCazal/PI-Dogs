import "./cards.styles.css"

function Cards({user}) {
  const{imagen,name,temperaments,altura}= user;
    return (
      <div className="card-container">
       <h1>{name}</h1>
       <img src={imagen} alt={name} />
       <p>{temperaments}</p>
       <p>{altura}</p>
      </div>
    );
  }
  

export default Cards;