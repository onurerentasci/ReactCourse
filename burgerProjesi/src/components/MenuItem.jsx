import React from "react";
import "../styles/Menu.css";

function MenuItem({ name, image, content, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <h6>{content}</h6>
      <p>{price} ₺</p>
    </div>
  );
}

export default MenuItem;
