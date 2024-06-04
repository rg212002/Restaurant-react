import React from 'react';
import '../Stlyles/Reservation.css';

function Reservation(props) {
  return (props.trigger) ? (
    <div className="reservation">
        <div className="popup">
            <button className="close-btn" onClick={()=>props.setTrigger(false)}>Cancel</button>
            {props.children}
        </div>
      
    </div>
  ) : "";
}

export default Reservation
