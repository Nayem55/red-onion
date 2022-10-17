import React from "react";
import useCart from "../../CustomHooks/useCart";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import "./OrderDetails.css";

const OrderDetails = () => {
  const [cart, setCart]  = useCart();
  const handleRemove=(item)=>{
    const rest = cart.filter((food) => food.id !== item.id);
    setCart(rest);
    removeFromDb(item.id);
  }
  let price = 0;
  let shipping = 0;
  let quantity = 0;
  let tax = 0;

  cart.forEach((product) => {
    quantity = quantity + product.quantity;
    price = price + product.price * product.quantity;
    shipping = shipping + 1 * product.quantity;
    tax = tax + 2 * product.quantity;
  });
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
          <Cart handleRemove={handleRemove} item={item}></Cart>
        ))}

        <div className="d-flex justify-content-between cart-summary">
          <div>
            <p>Subtotal</p>
            <p>Tax</p>
            <p>Delivery fee</p>
            <p>Total</p>
          </div>
          <div className="total">
            <p>$ {price}</p>
            <p>$ {tax}</p>
            <p>$ {shipping}</p>
            <p>$ {price+tax+shipping}</p>
          </div>
        </div>
        <button className="place-btn">Place Order</button>
      </div>
    </div>
  );
};

export default OrderDetails;
