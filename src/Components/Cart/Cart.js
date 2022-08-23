import React from "react";
import "./Cart.css";

const Cart = ({ item }) => {
  return (
      <div className="displayCart d-flex">
        <img src={item.image} alt="" />
        <div className="d-flex flex-column">
          <p className="mb-0">{item.name}</p>
          <p className="mt-0">Quantity : {item.quantity}</p>
          <h6>${item.price*item.quantity}</h6>
        </div>
      </div>
  );
};

export default Cart;
