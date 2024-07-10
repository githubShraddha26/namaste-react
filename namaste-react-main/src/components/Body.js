import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";


const Body = () =>{
  const [listOfRestaurant, setListOfRestaurant] = useState(resObj)

  //Array distructuring
//   const arr = useState(resObj);
//   const [listOfRestaurant, setListOfRestaurant] = arr;
//   const listOfRestaurant = arr[0];
//   const setListOfRestaurant= arr[1];

    return(
    <div className="body">
      <div className="search">
        <button className="filter-btn" onClick={
          ()=>{
            const filterList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            )
            setListOfRestaurant(filterList)
          }
          }>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {
         listOfRestaurant.map((restaurant)=>(
          <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
        ))
        }
        
        </div>
    </div>
  )
  }

  export default Body;