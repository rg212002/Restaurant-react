import React from 'react';
import "../Stlyles/Lunch.css";

function LunchItem({image, name, price}) {
  return (
    <div className="lunchItem">
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{price}</p>
      
    </div>
  )
}

export default LunchItem

