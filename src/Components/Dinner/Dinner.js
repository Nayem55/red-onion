import { useNavigate } from 'react-router-dom';
import useFood from '../../CustomHooks/useFoods';

const Dinner = () => {
    const [foods] = useFood() ;
    const Dinner= foods.filter(food=>food?.category==="dinner")
    const navigate = useNavigate()
    return (
        <div className='bf-container'>
            {
                Dinner.map(item=>
                <div key={item.id} className='breakfast'>
                    <img className='bf-img' src={item.image} alt="" />
                    <h4 className='mt-3'>{item.name}</h4>
                    <h5 className='mt-3'>${item.price}</h5>
                    <button onClick={()=>navigate(`/dinner/${item.id}`)} className='bf-btn mb-5'>Details</button>
                </div>
                )
            }
        </div>
    );
};

export default Dinner;