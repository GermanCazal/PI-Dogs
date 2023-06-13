import"./home.styles.css"
import {clearMessage, getUsers,getUsersByName } from "../../redux/actions";
import {useDispatch,useSelector} from "react-redux"
import { useEffect, useState,} from "react";
import CardList from "../../components/cardlist/CardList";
import Navbar from "../../components/navbar/navbar";



function Home() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);
  // const [filtered, setFiltered] = useState([]);
  const [searchString, setSearchString] = useState("");
  const messageError = useSelector((state) => state.message);



  useEffect(() => {
    if (!allUsers.length) {
      dispatch(getUsers());
    }
    if (messageError !== "") {
      alert(messageError);
    }
    return () => {
      dispatch(clearMessage());
    };

   },[dispatch, allUsers, messageError])


   const handleChange = (event) => {
    setSearchString(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getUsersByName(searchString));
  };





// const handleSubmit =(event)=>{
//   event.preventDeafault();
//   if(searchSting !==""){
//     const filter = filterd.filter(user => user.name.toLowerCase().includes(searchSting))
//     return setFilterd(filter)
//   }
//   setFilterd(allUsers)
// }




    return (
      <div className="home">
        <h1 className="home-title ">Estoy en home</h1>
        <Navbar handleSubmit={handleSubmit} handleChange={handleChange}/>
        <CardList allUsers={allUsers}/>
      </div>
    );
  }
  

export default Home;