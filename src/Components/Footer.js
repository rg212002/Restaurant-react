import React from 'react';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../Stlyles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="media">
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <p> &copy; Restaurant.com</p>
        </div>
      
    </div>
  )
}

export default Footer
