import Navbar from "../../components/navbar/navbar";
import {useDispatch,useSelector} from "react-redux"
import CardList from "../../components/cardlist/CardList";
import"./home.styles.css"
import { useEffect,} from "react";

import { getUsers } from "../../redux/actions";






function Home() {
  const dispatch = useDispatch()
  const allUsers = useSelector((state)=>state.allUsers)

  useEffect(()=>{
    dispatch(getUsers())
  },[])


    return (
      <div className="home">
        <h1 className="home-title ">Estoy en home</h1>
        <Navbar/>
        <CardList allUsers={allUsers}/>
      </div>
    );
  }
  

export default Home;