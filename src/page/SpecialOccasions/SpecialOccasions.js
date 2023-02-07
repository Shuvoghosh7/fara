import React from 'react';
import special from '../../Assets/special-occasions.png'
import './SpecialOccasions.css'
const SpecialOccasions = () => {
    return (
        <div className='special-occasions'>
            <div className='special-occasions-img'>
                <img src={special} alt="" />
            </div>
            <div className='special-occasions-text'>
            <h1>FARA EVENT PLANNER</h1>
                <h2>Other Special Occasions</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet cum facilis nobis laborum, necessitatibus debitis numquam fuga, neque perferendis ipsam maiores reprehenderit magni, in sint veritatis mollitia libero qui? Autem quos ratione optio, </h3>
                <p>JOIN FARA EVENT PLANNER</p>
            </div>
            
        </div>
    );
};

export default SpecialOccasions;