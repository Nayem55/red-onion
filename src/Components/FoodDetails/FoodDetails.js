import { useParams } from "react-router-dom";
import useFood from "../../CustomHooks/useFoods";
import "./FoodDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import useCart from "../../CustomHooks/useCart";
import { addToDb } from "../../utilities/fakedb";
import { useState } from "react";
const FoodDetails = () => {
  const [foods] = useFood();
  const [cart, setCart] = useCart();
  const [showAddedText, setshowAddedText] = useState(false);
  let { foodID } = useParams();
  const foodDetails = foods.find((food) => foodID == food?.id);
  
  const handleCart = () => {
    let newCart = [];
    const exist = cart.find((product) => product.id === foodDetails.id);
    if (!exist) {
      foodDetails.quantity = 1;
      newCart = [...cart, foodDetails];
    } else {
      const rest = cart.filter((product) => product.id !== foodDetails.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
    setCart(newCart);
    addToDb(foodDetails.id);
    setshowAddedText(true);
    setTimeout(()=>{setshowAddedText(false)},1000)
  
  };

  return (
    <div>
          <div className="details d-flex">
      <div className=" details-content">
        <h1>{foodDetails?.name}</h1>
        <p>{foodDetails?.description}</p>
        <div className=" details-img-mobile ">
          <img className="img-fluid" src={foodDetails?.image} alt="" />
        </div>
        <h2 className="mt-2">${foodDetails?.price}</h2>
        <button onClick={handleCart} className="cart-btn mt-3">
          {" "}
          <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> Add
        </button>
      </div>
      <div className=" details-img w-50 d-flex justify-content-center ">
        <img className="img-fluid w-75" src={foodDetails?.image} alt="" />
      </div>
    </div>
    <p className={`added-text ${showAddedText?"showAddedText":"hideAddedText"}`}>Added to Cart</p>
    </div>
  
  );
};

export default FoodDetails;
