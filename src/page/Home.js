import React from 'react';
import Anniversary from './Anniversary/Anniversary';
import BabyShower from './BabyShower/BabyShower';
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
                <BabyShower/>
            </div>
        </div>
    );
};

export default Home;