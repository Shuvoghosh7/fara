import React from 'react';
import mehndi from '../../Assets/Mehndiceremony.jpg'
import './MehndiCeremony.css'
const MehndiCeremony = () => {
    return (
        <div className='mehndi-ceremony'>
            <div className='mehndi-ceremony-text'>
               <h1>FARA EVENT PLANNER</h1>
               <h2>Mehndi Ceremony</h2> 
               <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis magnam maxime suscipit, excepturi, vel autem animi unde consequuntur iure id eius cumque eligendi ad molestias enim. Animi, rem! Porro, quisquam.</h3>
               <p>JOIN FARA EVENT PLANNER</p>
            </div>
            <div className='mehndi-ceremony-img'>
                <img src={mehndi} alt="" />
            </div>
            
        </div>
    );
};

export default MehndiCeremony;