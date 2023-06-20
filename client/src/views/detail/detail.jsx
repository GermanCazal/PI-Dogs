import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [dogs, setDogs] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/dogs/${id}`)
      .then(response => response.data)
      .then((data) => {
        if (data.name) {
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


  const height = dogs.height?.imperial || dogs.alto;
  const image = dogs.image || dogs.imegen
  const life_span = dogs.life_span || dogs.AñosDeVida

  return (
    <div>
      <img src={image} alt={dogs?.name} />
      <h2>Nombre: {dogs.name}</h2>
      <h2>Temperamento: {dogs.temperament}</h2>
      <h2>Altura: {height}</h2>
      <h2>Años de Vida: {life_span}</h2>
    </div>


  );
};

export default Detail;



















