// use local storage to manage cart data
const addToDb = id =>{
    const shoppingCart= getStoredCart()
    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('food-cart', JSON.stringify(shoppingCart));
}

const reduceFromDb = id =>{
    const shoppingCart= getStoredCart()
    // reduce quantity
    const quantity = shoppingCart[id];
    if(quantity>1){
        const newQuantity = quantity - 1;
        shoppingCart[id] = newQuantity;
    }

    localStorage.setItem('food-cart', JSON.stringify(shoppingCart));
}


const getStoredCart=()=>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('food-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    return shoppingCart;
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('food-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('food-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb, 
    reduceFromDb,
    getStoredCart,
    removeFromDb,
    deleteShoppingCart
}