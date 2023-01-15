import React, { useState } from 'react';
import logo from "../assets/x2y2-logo.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav>
      <img src={logo} alt="Logo" />
      <input type="text" placeholder="Search..." style={{display: isOpen? "block" : "none"}}/>
      <i className="fas fa-search" style={{display: isOpen? "block" : "none"}}></i>
      <i className="fas fa-cart-shopping" style={{display: isOpen? "block" : "none"}}></i>
      <i className="fas fa-gas-pump" style={{display: isOpen? "block" : "none"}}></i>
      <i className="fas fa-globe" onClick={() => setOpen(!isOpen)}></i>
    </nav>
  );
}

export default Navbar;
