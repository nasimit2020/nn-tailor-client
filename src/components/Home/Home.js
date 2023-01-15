import React from 'react';
import Services from '../Services/Services';
import Contact from './Contact';
import Navbar from './Navbar';
import Shop from './Shop';
import Slider from './Slider';
import TestimonialAll from './TestimonialAll';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Services></Services>
            <Shop></Shop>
            <TestimonialAll></TestimonialAll>
            <Contact></Contact>
        </div>
    );
};

export default Home;