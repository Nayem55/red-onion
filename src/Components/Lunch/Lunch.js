import { useNavigate } from 'react-router-dom';
import useFood from '../../CustomHooks/useFoods';

const Lunch = () => {
    const [foods] = useFood() ;
    const Lunch= foods.filter(food=>food?.category==="lunch")
    const navigate = useNavigate()
    return (
        <div className='bf-container'>
            {
                Lunch.map(item=>
                <div key={item.id} className='breakfast'>
                    <img className='bf-img img-fluid' src={item.image} alt="" />
                    <h4 className='mt-3'>{item.name}</h4>
                    <h5 className='mt-3'>${item.price}</h5>
                    <button onClick={()=>navigate(`/lunch/${item.id}`)} className='bf-btn mb-5'>Details</button>
                </div>
                )
            }
        </div>
    );
};

export default Lunch;