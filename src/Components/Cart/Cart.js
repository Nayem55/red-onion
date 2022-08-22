import React from "react";
import "./Cart.css";

const Cart = ({ item }) => {
  return (
      <div className="displayCart d-flex">
        <img src={item.image} alt="" />
        <div className="d-flex flex-column">
          <p>{item.name}</p>
          <h6>${item.price}</h6>
        </div>
      </div>
  );
};

export default Cart;
