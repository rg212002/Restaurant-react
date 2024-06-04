import React from 'react';
import "../Stlyles/Contact.css"
import ContactLogo from "../Assets/Contact.jpg";

function Contact() {
  return (
    <div className="contact">
        <div className="leftSide"
            style={{backgroundImage:`url(${ContactLogo})`}}>

        </div>

        <div className="rightSide">
            <h1>Contact Us</h1>
            <form id="contact-form" method="POST">
                <label htmlFor='name'>Full Name</label>
                <input name="name" placeholder="Enter your full name"></input>
                <label htmlFor='email'>Email</label>
                <input name="email" placeholder="Enter email"></input>
                <textarea 
                rows="6"
                placeholder="Enter Message"
                name="message"
                required
                ></textarea>
                <button type="submit" method="POST">Send Message</button>
            </form>
        </div>

    </div>
    
  )
}

export default Contact
