import React from 'react';
import './OurService.css'
import service from '../../Assets/service.png';
const OurService = () => {
    return (
        <div className='service'>
            <h1 className='service-title'>Our Service</h1>
            <div className='our-service'>
                <div className='ser-img'>
                    <img src={service} alt="" />
                </div>
                <div className='service-text'>
                    <h1>FARA EVENT PLANNER</h1>
                    <h2>Wedding Ceremony</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet cum facilis nobis laborum, necessitatibus debitis numquam fuga, neque perferendis ipsam maiores reprehenderit magni, in sint veritatis mollitia libero qui? Autem quos ratione optio, </h3>

                </div>

            </div>
        </div>
    );
};

export default OurService;