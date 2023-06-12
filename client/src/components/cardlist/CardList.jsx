import Cards from "../cards/cards";
import "./cardList.styles.css"

function CardList({allUsers}) {

const usersList = allUsers
    return (
      <div className="card-list">
       {
        usersList?.map((user,index)=><Cards key={index} user={user}/>)
       }
      </div>
    );
  }
  

export default CardList;