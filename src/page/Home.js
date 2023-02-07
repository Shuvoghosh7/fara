import React from 'react';
import Anniversary from './Anniversary/Anniversary';
import Banner from './Banner/Banner';
import OurService from './OurService/OurService';
import OurStory from './OurStory/OurStory';


const Home = () => {
    return (
        <div>
            <Banner />
            <div className='content-page'>
                <OurStory />
                <OurService />
                <Anniversary/>
            </div>
        </div>
    );
};

export default Home;