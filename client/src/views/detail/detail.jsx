import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const Detail =()=>{
  const {id}= useParams()
  const[dogs, setDogs] = useState({})


  useEffect(()=>{
    axios(`http://localhost:3001/dogs/${id}`)
    .then(response =>response.data)
    .then((data)=>{
      if(data.name){
        setDogs(data)
      }else{
        window.alert("No hay perros con ese id")
      }
    })
    return setDogs({})
  }, [id])
  return (
    <div>
      <h2>{dogs.name}</h2>
      <h2>{dogs.temperaments}</h2>
      <h2>{dogs.altura}</h2>
      <img src={dogs?.imagen} alt={dogs?.name} />
    </div>
  )
}

export default Detail;