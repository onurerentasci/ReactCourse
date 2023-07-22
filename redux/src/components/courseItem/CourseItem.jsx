import React from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../../control/cartSlice";
import "./CourseItem.css";

function CourseItem({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="cartItem">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4>{price} ₺</h4>
        <div className="cartInfo">
          <button
            className="cartQuantityButton"
            onClick={() => dispatch(increase(id))}
          >
            <BiChevronUp />
          </button>
          <p className="cartQuantity">{quantity}</p>
          <button
            className="cartQuantityButton"
            onClick={() => dispatch(decrease(id))}
          >
            <BiChevronDown />
          </button>
        </div>
        <button
          className="cartDeleteButton"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          Sil
        </button>
      </div>
    </div>
  );
}

export default CourseItem;
