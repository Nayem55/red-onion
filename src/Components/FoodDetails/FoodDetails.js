import { useParams } from 'react-router-dom';
import useFood from '../../CustomHooks/useFoods';
import './FoodDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import useCart from '../../CustomHooks/useCart';
import { addToDb } from '../../utilities/fakedb';
const FoodDetails = () => {
    const [foods] = useFood() ;
    const [cart, setCart] = useCart();
    let {foodID} = useParams();
    const foodDetails = foods.find(food=>foodID==food?.id)

    const handleCart = () => {
        let newCart = [];
        const exist = cart.find((product) => product.id === foodDetails.id);
        if (!exist) {
          foodDetails.quantity = 1;
          newCart = [...cart, foodDetails];
        } else {
          const rest = cart.filter((product) => product.id !== foodDetails.id);
          exist.quantity = exist.quantity + 1;
          newCart=[...rest,exist];  
        }
        setCart(newCart);
        addToDb(foodDetails.id);
      };
      // const clearCart = () => {
      //   localStorage.removeItem("shopping-cart");
      //   setCart([]);
      // };
      // let price = 0;
      // let shipping = 0;
      // let quantity = 0;
    
      // cart.forEach((product) => {
      //   quantity = quantity + product.quantity;
      //   price = price + product.price * product.quantity;
      //   shipping = shipping + product.shipping * product.quantity;
      // });
 
    return (
        <div className='details d-flex'>
        <div className='w-50 d-flex flex-column justify-content-center'>
           <h1>{foodDetails?.name}</h1>
           <p>{foodDetails?.description}</p>
           <h2>${foodDetails?.price}</h2>
           <button onClick={handleCart} className='cart-btn mt-3'> <FontAwesomeIcon icon={faCartPlus} ></FontAwesomeIcon> Add</button>
        </div>
        <div className=' details-img w-50 d-flex justify-content-center '>
            <img className='img-fluid w-75' src={foodDetails?.image} alt="" />
        </div>
        </div>
    );
};

export default FoodDetails;