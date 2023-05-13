import React from 'react';
import Header from './Header';
import Services from './Services';
import Review from './Review';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Services></Services>
            <Review></Review>
            <Shop></Shop>
        </>
    );
};

export default Home;