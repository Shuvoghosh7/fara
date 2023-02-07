import React from 'react';
import './BabyShower.css'
import Baby from '../../Assets/baby.png'
const BabyShower = () => {
    return (
        <div className='baby-shower'>
            <div className='baby-shower-text'>
               <h1>FARA EVENT PLANNER</h1>
               <h2>Baby Shower</h2> 
               <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis magnam maxime suscipit, excepturi, vel autem animi unde consequuntur iure id eius cumque eligendi ad molestias enim. Animi, rem! Porro, quisquam.</h3>
            </div>
            <div className='baby-shower-img'>
                <img src={Baby} alt="" />
            </div>
            
        </div>
    );
};

export default BabyShower;