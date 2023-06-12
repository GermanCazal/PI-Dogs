import "./cards.styles.css"

function Cards({user}) {
  const{image,name,temperament,weight}= user;
    return (
      <div className="card-container">
       <h1>{name}</h1>
       <img src={image.url} alt={name} />
       <p>{temperament}</p>
       <p>{weight.imperial}</p>
      </div>
    );
  }
  

export default Cards;