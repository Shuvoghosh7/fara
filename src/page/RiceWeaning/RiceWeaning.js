import React from 'react';
import rice from '../../Assets/ricew.jpg';
import './RiceWeaning.css'
const RiceWeaning = () => {
    return (
        <div className='rice-weaning'>
            <div className='rice-weaning-img'>
                <img src={rice} alt="" />
            </div>
            <div className='rice-weaning-text'>
            <h1>FARA EVENT PLANNER</h1>
                <h2>Rice Weaning</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet cum facilis nobis laborum, necessitatibus debitis numquam fuga, neque perferendis ipsam maiores reprehenderit magni, in sint veritatis mollitia libero qui? Autem quos ratione optio, </h3>
                <p>JOIN FARA EVENT PLANNER</p>
            </div>
            
        </div>
    );
};

export default RiceWeaning;