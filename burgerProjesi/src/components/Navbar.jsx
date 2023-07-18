import React from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

import logo from "../assets/burgerlogo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="main">
        <img src={logo} alt="burgerlogo" />
        <div className="main-link">
          <Link to="/">Anasayfa</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">Hakkımızda</Link>
          <Link to="/contact">İletişim</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
