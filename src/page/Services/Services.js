import React from 'react';
import './Services.css'
import Arbours from '../../Assets/Arbours.png'
import Cake from '../../Assets/Cake Tables.jpg'
import Chair from '../../Assets/Chair.jpg'
import Event from '../../Assets/Event Props.jpg'
const Services = () => {
    return (
        <div className='services'>
            <h1>You Are Also Looking For</h1>
            <div className='service-provide'>
                <div>
                    <img src={Arbours} alt="" className='service-img'/>
                    <p className='service-title'>Arbours</p>
                    <p className='service-about'>Lorem ipsum dolor sit amet consectetur .</p>
                    <p className='service-price'>Per Ddy <span>$100-$200</span></p>
                </div>
                <div>
                    <img src={Cake} alt="" className='service-img'/>
                    <p className='service-title'>Cake Tables</p>
                    <p className='service-about'>Lorem ipsum dolor sit amet consectetur .</p>
                    <p className='service-price'>Per Ddy <span>$100-$200</span></p>
                </div>
                <div>
                    <img src={Chair} alt="" className='service-img'/>
                    <p className='service-title'>Chair</p>
                    <p className='service-about'>Lorem ipsum dolor sit amet consectetur .</p>
                    <p className='service-price'>Per Ddy <span>$100-$200</span></p>
                </div>
                <div>
                <img src={Event} alt="" className='service-img'/>
                    <p className='service-title'>Event Props</p>
                    <p className='service-about'>Lorem ipsum dolor sit amet consectetur .</p>
                    <p className='service-price'>Per Ddy <span>$100-$200</span></p>
                </div>
            </div>
        </div>
    );
};

export default Services;