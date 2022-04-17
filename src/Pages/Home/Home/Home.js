import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;