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
    <div>
      <img src={dogs.image} alt={dogs?.name} className="detail-image" />
      <h2 className="detail-title">Nombre: {dogs.name}</h2>
      <h2 className="detail-info">Temperamento: {dogs.temperaments}</h2>
      <h2 className="detail-info">Altura: {dogs.height}</h2>
      <h2 className="detail-info">Años de Vida: {dogs.life_span}</h2>
    </div>


  );
};

export default Detail;



















