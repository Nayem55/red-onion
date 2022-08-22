import { useEffect } from "react";
import { useState } from "react";
import { getStoredCart } from "../utilities/fakedb";
import useFood from "./useFoods";

const useCart=()=>{
    const [cart, setCart] = useState([]);
    const [foods] = useFood() ;

    useEffect(() => {
      const storedCart = getStoredCart();
      const savedCart = [];
      for (const id in storedCart) {
        const addedProduct = foods?.find((food) => food?.id == id);
        if (addedProduct) {
          const quantity = storedCart[id];
          addedProduct.quantity = quantity;
          savedCart.push(addedProduct);
        }
      }
      setCart(savedCart);
    }, [foods]);
    return [cart, setCart];
}

export default useCart;