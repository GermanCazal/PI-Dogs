import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./detail.styles.css"

const Detail = () => {
  const { id } = useParams();
  const [dogs, setDogs] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/dogs/${id}`)
      .then(response => response.data)
      .then((data) => {
        if (data.id) {
          setDogs(data);
        } else {
          window.alert("No hay perros con ese id");
        }
      })
      .catch(error => {
        console.log(error);
        window.alert("Error al obtener los datos del perro");
      });
  }, [id]);

  console.log(dogs)



  return (
    <div className="detail-container">
        <h1>Detail</h1>

        <div className="detail-card">
      <div className="profile">
      <img src={dogs.image} alt={dogs?.name}/>
      <h2 >Nombre: {dogs.name}</h2>
      </div>

      <div className="info">
      <p >Temperamento: <span>{dogs.temperaments}</span> </p>
      <p >Altura: <span>{dogs.height}</span> </p>
      <p >Años de Vida: <span>{dogs.life_span}</span> </p>
      </div>

      </div>
    </div>


  );
};

export default Detail;



















