import React from 'react';
import Anniversary from './Anniversary/Anniversary';
import BabyShower from './BabyShower/BabyShower';
import Banner from './Banner/Banner';
import BirthdayCeremony from './BirthdayCeremony/BirthdayCeremony';
import BookSession from './BookSession/BookSession';
import EventStories from './EventStories/EventStories';
import MehndiCeremony from './MehndiCeremony/MehndiCeremony';
import OurService from './OurService/OurService';
import OurStory from './OurStory/OurStory';
import RiceWeaning from './RiceWeaning/RiceWeaning';
import Services from './Services/Services';
import SpecialOccasions from './SpecialOccasions/SpecialOccasions';


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
                <RiceWeaning/>
                <MehndiCeremony/>
                <SpecialOccasions/>
                <Services/>
            </div>
            <BookSession/>
            <div className='content-page'>
                <EventStories/>
            </div>
            
        </div>
    );
};

export default Home;