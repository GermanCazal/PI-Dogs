import React from 'react';
import './navbar.styles.css';
import { Link } from 'react-router-dom';
import img from '../../img/perro-pastor.png';

function Navbar({ handleSubmit, handleChange }) {
  return (
    <div className="navbar-container">
      <div className='logo-container'>
      <Link to={`/`}>
        <img className='imgLogo' src={img} alt="" />
      </Link>
      </div>
      <div className="search-box">
        <form>
          <input onChange={handleChange} placeholder="Búsqueda" />
          <br />
          <button onClick={handleSubmit}>Buscar</button>
        </form>
      </div>
      <div className="link-container">
        <Link to={`/create`} className="link-item">CREA TU RAZA</Link>
        <Link to={`/`} className="link-item">INICIO</Link>
      </div>
    </div>
  );
}

export default Navbar;