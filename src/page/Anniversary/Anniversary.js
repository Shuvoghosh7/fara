import React from 'react';
import anniversary from '../../Assets/anniversary.jpg';
import './Anniversary.css'
const Anniversary = () => {
    return (
        <div className='anniversary'>
            <div className='anniversary-text'>
               <h1>FARA EVENT PLANNER</h1>
               <h2>Anniversary</h2> 
               <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis magnam maxime suscipit, excepturi, vel autem animi unde consequuntur iure id eius cumque eligendi ad molestias enim. Animi, rem! Porro, quisquam.</h3>
            </div>
            <div className='anniversary-img'>
                <img src={anniversary} alt="" />
            </div>
            
        </div>
    );
};

export default Anniversary;