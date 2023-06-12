import "./cards.styles.css"

function Cards({user}) {
  const{imagen,nombre,temperamento,peso}= user;
    return (
      <div className="card-container">
       <h1>{imagen}</h1>
       <h2>{nombre}</h2>
       <p>{temperamento}</p>
       <p>{peso}</p>
      </div>
    );
  }
  

export default Cards;