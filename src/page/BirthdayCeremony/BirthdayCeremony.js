import React from 'react';
import Birthday from '../../Assets/birthday.jpg';
import './BirthdayCeremony.css'
const BirthdayCeremony = () => {
    return (
        <div className='Birthday-Ceremony'>
            <div className='birthday-ceremony-img'>
                <img src={Birthday} alt="" />
            </div>
            <div className='birthday-ceremony-text'>
            <h1>FARA EVENT PLANNER</h1>
                <h2>Wedding Ceremony</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet cum facilis nobis laborum, necessitatibus debitis numquam fuga, neque perferendis ipsam maiores reprehenderit magni, in sint veritatis mollitia libero qui? Autem quos ratione optio, </h3>
                <p>JOIN FARA EVENT PLANNER</p>
            </div>
            
        </div>
    );
};

export default BirthdayCeremony;