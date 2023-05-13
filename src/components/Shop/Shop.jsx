import React from 'react';
import ClothStore from '../../assets/images/shop.jpg';
import { Link } from 'react-router-dom';

const Shop = () => {
    return (
        <div className="hero min-h-screen bg-base-200 lg:px-28 sm:px-12">
            <div className="hero-content flex-col lg:flex-row">
                <img src={ClothStore} alt='Cloth Store' className='w-96 rounded-lg'/>
                <div>
                    <h1 className="text-5xl font-bold">Visit Our Readymade Store</h1>
                    <p className="py-6">Welcome to NN TAILOR, the ultimate destination for fashion enthusiasts seeking the perfect blend of style and fit. Our readymade tailor store is a haven for those who value both convenience and personalized fashion..</p>
                    <Link to='shop' className="btn btn-primary">Visit Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Shop;