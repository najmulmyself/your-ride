import React from "react";
import "./Navbar.css";
const Navabar = () => {
  return (
    <div className="nav">
      <div>
        <h3>Your Ride</h3>
      </div>
      <div>
        <li className="li">Home</li>
        <li className="li">Destination</li>
        <li className="li">Blog</li>
        <li className="li">Contact</li>
        <button>Log In</button>
      </div>
    </div>
  );
};

export default Navabar;
