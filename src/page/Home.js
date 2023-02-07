import React from 'react';
import Anniversary from './Anniversary/Anniversary';
import Banner from './Banner/Banner';
import BirthdayCeremony from './BirthdayCeremony/BirthdayCeremony';
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
                <BirthdayCeremony/>
            </div>
        </div>
    );
};

export default Home;