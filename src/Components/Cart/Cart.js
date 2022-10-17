import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


const Cart = ({ item , handleRemove }) => {
  return (
    <div className="displayCart">
      <div className="d-flex">
        <img src={item.image} alt="" />
        <div className="d-flex flex-column">
          <p className="mb-0">{item.name}</p>
          <p className="mt-0">Quantity : {item.quantity}</p>
          <h6>${item.price * item.quantity}</h6>
        </div>
      </div>
      <FontAwesomeIcon onClick={()=>handleRemove(item)} className="delete-icon" icon={faTrashCan}></FontAwesomeIcon>
    </div>
  );
};

export default Cart;
