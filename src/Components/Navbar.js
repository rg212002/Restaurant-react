import React from 'react';
import Logo from"../Assets/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";

import  "../Stlyles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
        <div className="leftside">
            <img ></img>
            <p>The Gourmet Haven</p>
            <div className="hiddenLinks">
                <Link to="/Home">Home</Link>
                <Link to="">About</Link>
                <Link to="">Contact</Link>
                <Link to="/Menu">Menu</Link>
            </div>
        </div>
      <div className="rightside">
        <Link to="/Home">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="About">About</Link>
        <Link to="/Contact">Contact</Link>
        <button>
            <ReorderIcon />
        </button>
        
      </div>
      
    </div>
  )
}

export default Navbar
