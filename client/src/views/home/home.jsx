import Navbar from "../../components/navbar/navbar";
import CardList from "../../components/cardlist/CardList";

function Home() {
    return (
      <div className="home">
        <h1>Estoy en home</h1>
        <Navbar/>
        <CardList/>
      </div>
    );
  }
  

export default Home;