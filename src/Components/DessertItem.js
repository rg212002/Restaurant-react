import React from 'react';
import "../Stlyles/Menu.css";

function DesertItem({name, image, price}) {
  return (
    <div className="dessertItem">
      <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{price}</p>
    </div>
  )
}

export default DesertItem
