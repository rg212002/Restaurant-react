import React from 'react';
import "../Stlyles/Dinner.css";

function DinnerItem({image, name, price}) {
  return (
    <div className="dinnerItem">
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{price}</p>
      
    </div>
  )
}

export default DinnerItem;