import React from "react";
import { Data } from "../data/Data";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {Data.map((menuItem, index) => {
          return (
            <MenuItem
              key={index}
              name={menuItem.name}
              image={menuItem.image}
              content={menuItem.content}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
