import Navbar from "../../components/navbar/navbar";
import {useDispatch,useSelector} from "react-redux"
import CardList from "../../components/cardlist/CardList";
import"./home.styles.css"
import { useEffect, useState,} from "react";

import { getUsers } from "../../redux/actions";



function Home() {
  const dispatch = useDispatch()
  const allUsers = useSelector((state)=>state.allUsers)
 const [filterd, setFilterd]= useState([])
 const [searchSting,setSearchString]=useState("")


   useEffect(()=>{
    dispatch(getUsers());
    setFilterd(allUsers)
   },[dispatch, allUsers])


const handleChange =(event) =>{
setSearchString(event.target.value.toLowerCase());
}

const handleSubmit =(event)=>{
  event.preventDeafault();
  if(searchSting !==""){
    const filter = filterd.filter(user => user.name.toLowerCase().includes(searchSting))
    return setFilterd(filter)
  }
  setFilterd(allUsers)
}




    return (
      <div className="home">
        <h1 className="home-title ">Estoy en home</h1>
        <Navbar handleSubmit={handleSubmit} handleChange={handleChange}/>
        <CardList allUsers={filterd}/>
      </div>
    );
  }
  

export default Home;