import React from 'react';
import event from '../../Assets/event.jpg'

import './EventStories.css'
const EventStories = () => {
    return (
        <div className='event-stories'>
            <h1>Event Stories</h1>
            <div className='our-event-stories'>
                <div>
                    <img src={event} alt="" className='event-stories-img'/>
                    <p className='event-stories-title'>Ketty & Zack</p>
                    <p className='event-stories-about'>Lorem ipsum dolor sit amet consectetur </p>
                    <p className='event-stories-date'>22 Dec 2022</p>
                </div>
                <div>
                    <img src={event} alt="" className='event-stories-img'/>
                    <p className='event-stories-title'>Ketty & Zack</p>
                    <p className='event-stories-about'>Lorem ipsum dolor sit amet consectetur </p>
                    <p className='event-stories-date'>22 Dec 2022</p>
                </div>
                <div>
                    <img src={event} alt="" className='event-stories-img'/>
                    <p className='event-stories-title'>Ketty & Zack</p>
                    <p className='event-stories-about'>Lorem ipsum dolor sit amet consectetur </p>
                    <p className='event-stories-date'>22 Dec 2022</p>
                </div>
                
            </div>
        </div>
    );
};

export default EventStories;