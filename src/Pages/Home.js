import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Banner from "../Assets/BannerImage.jpg";
import "../Stlyles/Home.css";
import Reservation  from '../Components/Reservation';

function Home() {
  
  const[buttonPopup, setButtonPopup] = useState(false);
  return (
    <div>
      
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
        <div className="headerContainer" >
          <h1> The Gourmet Haven</h1> <br/>
          <p> Every meal is a celebration of flavor and quality! </p>
          <Link to= "/menu"><button>Menu</button></Link> 
        </div>
        
      </div>
      <br></br><br></br><br></br>
      <div className="infoHeader">
      
        <div className="info" >
          <h1>HOURS & LOCATION</h1><br />
          <a href=""><p>Street Number <br /> City, State, Zip Code<br /></p></a><a href=""><p>+1 (000) 000 - 000</p></a>
          
          <p> Service Hours (Wednesday - Sunday)</p>
          <p>Lunch 11:30 am - 3pm  | Dinner 4:00pm - 10:00pm</p> <br/>
        </div>
        
        <div className="infoLinks">
        
        <Link to="/menu"> <button>Menu</button> </Link><br /><br />
        <button onClick={() => setButtonPopup(true)} >Reservation </button><br /><br />
        <Reservation trigger={buttonPopup} setTrigger={setButtonPopup}>
          <form className="form" method = "post" action = "http://www.deitel.com">
              
              <p>
                
                  <label>Full Name:<br/>
                      <input name = "fullname" type = "text" size="100"/>
                  </label>
          
              </p>
              
              <p>
                  <label> Party size:<br/>
                      <input name = "lastname" type = "25" size = "25"/>
                  </label>
                                
              </p>
              
              <p>
                  <label>Email Address:
                      <input name = "emailAdd" type = "password" size = "5"/>
                  </label><br /><br />
                  
                  <label>Time:<br />
                    <input type = "time"/>
                
                </label>
                                
              </p>
              <p>
                  <input type = "submit" value = "Sumbit"/>
                  <input type = "reset" value = "Reset"/>             
              </p>
          </form>
        </Reservation>
         
        </div>
      </div>
     
    </div>
    
  )
}

export default Home
