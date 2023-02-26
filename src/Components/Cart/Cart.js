import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan,faPlusSquare ,faMinusSquare} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { addToDb, reduceFromDb } from "../../utilities/fakedb";

const Cart = ({ item, handleRemove }) => {
  const [quantity,setQuantity] = useState(item.quantity)
  const handlePlus =()=>{
    setQuantity(quantity+1)
    addToDb(item.id)
    window.location.reload();
  }
  const handleMinus =()=>{
    if(quantity>1)
    setQuantity(quantity-1)
    reduceFromDb(item.id)
    window.location.reload();
  }
  return (
    <div className="displayCart">
      <div className="d-flex">
        <img src={item.image} alt="" />
        <div className="d-flex flex-column">
          <p className="mb-0">{item.name}</p>
          <p className="mt-0">
            <button onClick={handleMinus} className="quantity me-2"> <FontAwesomeIcon icon={faMinusSquare}></FontAwesomeIcon> </button> {quantity}{" "}
            <button onClick={handlePlus} className="quantity ms-2"> <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon> </button>
          </p>
          <h6>${item.price * quantity}</h6>
        </div>
      </div>
      <FontAwesomeIcon
        onClick={() => handleRemove(item)}
        className="delete-icon"
        icon={faTrashCan}
      ></FontAwesomeIcon>
    </div>
  );
};

export default Cart;
