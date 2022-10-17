import { useNavigate } from "react-router-dom";
import useFood from "../../CustomHooks/useFoods";
import "./Breakfast.css";

const Breakfast = () => {
  const [foods] = useFood();
  const BfItems = foods.filter((food) => food?.category === "breakfast");
  const navigate = useNavigate();
  return (
    <div className="bf-container">
      {BfItems.map((item) => (
        <div key={item.id} className="breakfast">
          <img className="bf-img" src={item.image} alt="" />
          <h4 className="mt-3">{item.name}</h4>
          <h5 className="mt-3">${item.price}</h5>
            <button
              onClick={() => navigate(`/breakfast/${item.id}`)}
              className="cart-btn mb-5"
            >
              Details
            </button>
        </div>
      ))}
    </div>
  );
};

export default Breakfast;
