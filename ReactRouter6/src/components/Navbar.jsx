import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="mainNav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/history">History</Link>
      <Link to="/members">Members</Link>
    </nav>
  );
}

// Aynı işlem Link yerine NavLink ile yapılabilir bu sayede elements alanında tıklanan NavLink active classını alır
// active classı sayesinde 'mainNav a.active' ile tasarımında değişiklik yapılmasına olanak sağlar

export default Navbar;
