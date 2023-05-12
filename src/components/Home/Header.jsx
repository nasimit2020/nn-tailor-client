import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container flex justify-center items-center' >
            <div className='text-emerald-50 header-section text-center'>
                <h2 className=' text-6xl font-medium '>Make Your Dress From Professional</h2>
                <h6 className='text-2xl py-5'>One-stop solution for your services. Order any service, anytime.</h6>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;