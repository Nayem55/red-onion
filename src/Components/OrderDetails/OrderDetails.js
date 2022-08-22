import React from "react";
import useCart from "../../CustomHooks/useCart";
import Cart from "../Cart/Cart";
import "./OrderDetails.css";

const OrderDetails = () => {
  const [cart] = useCart();
  return (
    <div className="orderDetails">
      <div className="delivery">
        <h3>Delivery Details</h3>
        <hr />
        <form className="d-flex flex-column">
          <input type="text" name="address" id="" placeholder="Address" />
          <input type="text" name="" id="" placeholder="Flat,suite or floor" />
          <input type="text" name="" id="" placeholder="Business Name" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Add delivery instructor"
          />
          <input className="submit" type="submit" />
        </form>
      </div>
      <div className="cart">
        {cart.map((item) => (
          <Cart item={item}></Cart>
        ))}

        <div className="d-flex justify-content-between cart-summary">
          <div>
            <p>Subtotal</p>
            <p>Tax</p>
            <p>Delivery fee</p>
            <p>Total</p>
          </div>
          <div>
            <p>$</p>
            <p>$</p>
            <p>$</p>
            <p>$</p>
          </div>
        </div>
        <button className="place-btn">Place Order</button>
      </div>
    </div>
  );
};

export default OrderDetails;
