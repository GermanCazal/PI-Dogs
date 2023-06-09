import Navbar from "../../components/navbar/navbar";
import CardList from "../../components/cardlist/CardList";
import"./home.styles.css"
function Home() {
    return (
      <div className="home">
        <h1 className="home-title ">Estoy en home</h1>
        <Navbar/>
        <CardList/>
      </div>
    );
  }
  

export default Home;