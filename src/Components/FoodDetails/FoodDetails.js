import React from 'react';
import { useParams } from 'react-router-dom';
import useFood from '../../CustomHooks/useFoods';
import './FoodDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
const FoodDetails = () => {
    const [foods] = useFood() ;
    let {foodID} = useParams();
    const foodDetails = foods.find(food=>foodID==food?.id)
    return (
        <div className='details d-flex'>
        <div className='w-50 d-flex flex-column justify-content-center'>
           <h1>{foodDetails?.name}</h1>
           <p>{foodDetails?.description}</p>
           <h2>${foodDetails?.price}</h2>
           <button className='cart-btn mt-3'> <FontAwesomeIcon icon={faCartPlus} ></FontAwesomeIcon> Add</button>
        </div>
        <div className=' details-img w-50 d-flex justify-content-center '>
            <img className='img-fluid w-75' src={foodDetails?.image} alt="" />
        </div>
        </div>
    );
};

export default FoodDetails;