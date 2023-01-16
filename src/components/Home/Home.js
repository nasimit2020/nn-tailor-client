import React from 'react';

import Login from '../Login/Login';
import Services from '../Services/Services';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import Shop from './Shop';
import Slider from './Slider';
import TestimonialAll from './TestimonialAll';

const Home = () => {
    
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Shop></Shop>
            <TestimonialAll></TestimonialAll>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;