import React from 'react';
import { dessertList } from '../Addition/DessertList';
import DessertItem from '../Components/DessertItem';
import "../Stlyles/Dessert.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Desert() {
  return (
    <div className="dessert">
        <h1 className="dessertTitle" >Dessert Menu</h1>
        <a className="bckBtn" href="/Dinner"><ArrowBackIosIcon /> </a>
        <div className="dessertList">
            {dessertList.map((dessertItem, key) => {
                return (
                <DessertItem
                key={key}
                image={dessertItem.image}
                name={dessertItem.name}
                />
            );
            
            })}
        
        
        </div>
      
    </div>
  )
}

export default Desert
