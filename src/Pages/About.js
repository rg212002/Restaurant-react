import React from 'react'
import Banner from "../Assets/BannerImage.jpg";
import "../Stlyles/About.css";

function About() {
  return (
    <div className="about">
        <div className="aboutTop" style={{backgroundImage:`url(${Banner})`}}></div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p>Welcome to The Gourmet Haven, where culinary excellence meets a warm and inviting atmosphere. 
              Nestled in the heart of [Your Location], our restaurant is dedicated to providing an unforgettable dining experience for every guest. 
              From the freshest ingredients and expertly crafted dishes to our attentive service and elegant ambiance, we strive to make each visit special.
              Whether you’re joining us for a casual lunch, an intimate dinner, or a delightful dessert, we invite you to savor the flavors and enjoy the artistry of our chefs. 
              At The Gourmet Haven, we believe that good food is not just about nourishment, but about bringing people together to create lasting memories.
              
            </p>
        </div>
    </div>
  )
}

export default About
