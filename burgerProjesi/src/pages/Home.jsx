import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css"

import bgHome from "../assets/banneryeni.jpg";

function Home() {
  return (
    <div className="mainPage" style={{ backgroundImage: `url(${bgHome})` }}>
      <div className="order">
        <Link to="/menu">
          <button>Sipariş Ver</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
