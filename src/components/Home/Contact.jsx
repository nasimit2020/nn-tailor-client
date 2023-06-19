import React from 'react';
import ServiceRequest from './../../assets/images/service-request.png';
import { IoCall } from "react-icons/io5";

const Contact = () => {
    return (
        <div className='lg:px-32 sm:px-12 pt-12 mt-24 bg-teal-50'>
            <div className='flex'>
                <div>
                    <h3 className='bold text-2xl py-5'>Can’t find your desired service? Let us know 24/7 in 16516.</h3>
                    <div className='grid grid-cols-2'>
                        <button className="btn btn-accent btn-wide">Request a service</button>
                        <button className="btn  btn-wide btn-outline btn-accent"><IoCall className='mr-3'/> 16000</button>
                    </div>
                </div>
                <div className=''>
                    <img src={ServiceRequest} alt="" srcSet="" className='mt-[-150px]' />
                </div>
            </div>
        </div>
    );
};

export default Contact;