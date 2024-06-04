import React from 'react';
import "../Stlyles/Menu.css";
import MenuItem from '../Components/Menuitem';
import Dinner from "../Assets/Dinner.jpg";
import Lunch from "../Assets/Lunch.jpg";
import Dessert from "../Assets/chocolatelavacake.jpg";
import {Link} from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
        <h1 className="menuTitle">Our Menu </h1>
        <div className="menuList">
          <Link to="/Lunch" >
          <MenuItem 
          image={Lunch}
          name="Lunch"
          /></Link>
          <Link to="/Dinner">
          <MenuItem 
          image={Dinner}
          name="Dinner"
          /></Link>
          <Link to="/Dessert">
          <MenuItem 
          image={Dessert}
          name="Dessert"
          /></Link>

        </div>
      
    </div>
  )
}

export default Menu
