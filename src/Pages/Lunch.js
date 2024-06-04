import React from "react";
import{lunchList} from "../Addition/LunchList";
import LunchItem from "../Components/LunchItem";
import "../Stlyles/Lunch.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Menu() {
  return (
    <div className="lunch">
      <h1 className="lunchTitle">Lunch Menu</h1>
      <div className="bckBtn"><a  href="/Menu"><ArrowBackIosIcon /> </a> <a  href="/Dinner"><ArrowForwardIosIcon /> </a> </div>
      <div className="lunchList">
        {lunchList.map((lunchItem, key) => {
          return (
            
            <LunchItem
              key={key}
              image={lunchItem.image}
              name={lunchItem.name}
            />
        
          );
          
        })}
        
        
      </div>
    </div>
  );
}

export default Menu;
