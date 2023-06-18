import"./home.styles.css"
import {clearMessage, getUsers,getUsersByName } from "../../redux/actions";
import {useDispatch,useSelector} from "react-redux"
import { useEffect, useState,} from "react";
import CardList from "../../components/cardlist/CardList";
import Navbar from "../../components/navbar/navbar";
import { filter } from "../../redux/actions";


function Home() {
  const dispatch = useDispatch();
  const ITEMNS_PER_PAGE = 10
  const allUsers = useSelector((state) => state.allUsers);
  const [searchString, setSearchString] = useState("");
  const messageError = useSelector((state) => state.message);
  const dogsFiltered = useSelector((state) => state.dogsFiltered);
  const filters= useSelector((state) => state.filters);
  const {currentPage, setCurrentPage} = useState(0)
  const [items, setItems] = useState([...allUsers].splice (0, ITEMNS_PER_PAGE))

const filterOrd = (event)=>{
  dispatch(filter(event.target.value))
}

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





    return (
      <div className="home">
        <h1 className="home-title ">Estoy en home</h1>
        <Navbar handleSubmit={handleSubmit} handleChange={handleChange}/>
        <label> Ordenamiento por nombre</label>
        <select onChange={filterOrd} name="" id="">
          <option defaultChecked value="0">-</option>
          <option value="asc">asc</option>
          <option value="dct">dct</option>
        </select>
        {filters? <CardList allUsers={dogsFiltered}/>: <CardList allUsers={items}/>}
        
      </div>
    );
  }
  

export default Home;