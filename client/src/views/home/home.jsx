import "./home.styles.css";
import { clearMessage, getUsers, getUsersByName } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CardList from "../../components/cardlist/CardList";
import Navbar from "../../components/navbar/navbar";
import { filter } from "../../redux/actions";
import {Link} from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const ITEMS_PER_PAGE = 8;
  const allUsers = useSelector((state) => state.allUsers);
  const [searchString, setSearchString] = useState("");
  const messageError = useSelector((state) => state.message);
  const dogsFiltered = useSelector((state) => state.dogsFiltered);
  const filters = useSelector((state) => state.filters);
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState([]);

  const nextPage = () => {
    const next_page = currentPage + 1;
    const firstIndex = next_page * ITEMS_PER_PAGE;
    if (firstIndex >= getDisplayedUsers().length) return;
    setItems(getDisplayedUsers().slice(firstIndex, firstIndex + ITEMS_PER_PAGE));
    setCurrentPage(next_page);
  };

  const prevPage = () => {
    const prev_page = currentPage - 1;
    if (prev_page >= 0) {
      const firstIndex = prev_page * ITEMS_PER_PAGE;
      if (prev_page < 0) return;
      setItems(getDisplayedUsers().slice(firstIndex, firstIndex + ITEMS_PER_PAGE));
      setCurrentPage(prev_page);
    }
  };

  const filterOrd = (event) => {
    dispatch(filter(event.target.value));
  };

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
  }, [dispatch, allUsers, messageError]);

  useEffect(() => {
    if (allUsers.length > 0) {
      setItems(getDisplayedUsers().slice(0, ITEMS_PER_PAGE));
      setCurrentPage(0);
    }
  }, [allUsers, dogsFiltered, filters, ITEMS_PER_PAGE]);

  const handleChange = (event) => {
    setSearchString(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getUsersByName(searchString));
  };

  const getDisplayedUsers = () => {
    return filters ? dogsFiltered : allUsers;
  };

  return (
    <div className="home">
      <h1 className="home-title ">Estoy en home</h1>
      <Navbar handleSubmit={handleSubmit} handleChange={handleChange} />
      <Link to={`/create`}> Create</Link>

      <label>Ordenamiento por nombre</label>
      <select onChange={filterOrd} name="" id="">
        <option value="asc">asc</option>
        <option value="dct">dct</option>
      </select>
      <CardList allUsers={items} />
      <div>
        <button onClick={prevPage}>prev</button>
        <button onClick={nextPage}>next</button>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Home;
