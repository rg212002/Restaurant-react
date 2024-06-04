import React from 'react';
import{dinnerList} from "../Addition/DinnerList";
import DinnerItem from "../Components/DinnerItem";
import "../Stlyles/Dinner.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Dinner() {
  return (
  <div className="dinner">
    <h1 className="dinnerTitle">Dinner Menu</h1>
    <div className="bckBtn"><a  href="/Lunch"><ArrowBackIosIcon /> </a> <a  href="/Dessert"><ArrowForwardIosIcon /> </a> </div>
      <div className="dinnerList">
        {dinnerList.map((dinnerItem, key) => {
          return (
            
            <DinnerItem
              key={key}
              image={dinnerItem.image}
              name={dinnerItem.name}
            />
        
          );
          
        })}
        
        
      </div>
  </div>
  );
}

export default Dinner;
