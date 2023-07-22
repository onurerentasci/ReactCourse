import React from "react";
import { PiBasketFill } from "react-icons/pi";
import { useSelector } from "react-redux";

import "./Navbar.css";

function Navbar() {
  const { quantity } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="navDiv">
        <h3>Kurs Uygulaması</h3>
        <div className="basketDiv">
          <div className="itemsDiv">
            <p>{quantity}</p>
          </div>
          <PiBasketFill className="itemsIcon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
