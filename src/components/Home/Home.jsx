import React from 'react';
import Header from './Header';
import Services from './Services';
import Review from './Review';
import Shop from '../Shop/Shop';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Services></Services>
            <Shop></Shop>
            <Review></Review>
            <Contact></Contact>
        </>
    );
};

export default Home;