function Navbar({handleSubmit,handleChange}) {
    return (
      <div className="search-box">
        <form>
          <input onChange={handleChange} placeholder="Busqueda" />
          <br />
          <button onClick={handleSubmit}>Buscar</button>
        </form>
      </div>
    );
  }
  

export default Navbar;