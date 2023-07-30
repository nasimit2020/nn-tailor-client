import React, { useContext, useEffect, useState } from 'react';
import Ladies from '../../assets/images/ladies.jpg';
import Baby from '../../assets/images/baby.jpg';
import Boy from '../../assets/images/boy.jpg';
import Resizing from '../../assets/images/Resizing.jpg';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

// const services = [
//     { id: 1, serviceName: 'Ladies Dress', img: Ladies },
//     { id: 2, serviceName: 'Child Dress', img: Baby },
//     { id: 3, serviceName: 'Men Dress', img: Boy },
//     { id: 4, serviceName: 'Resizing Dress', img: Resizing },
// ]

const Services = () => {
    const allServices = useLoaderData();
    const {user} = useContext(AuthContext)
   
    return (
        <div className='lg:px-32 sm:px-12 py-12'>
            <h2 className='text-2xl font-medium pb-5'>For Your Dress {user?.displayName}</h2>
            <div className="grid grid-cols-4 gap-4">
                {
                    allServices?.map(allService => (
                        <Link
                        to={`/OrderDetails/${allService?._id}`}
                        key={allService?._id}
                        >
                            <div className='text-center'>
                                <img src={allService?.url?.url} alt="" className='w-full h-48 rounded-xl' />
                                <h6 className='text-xl py-2 font-medium'>{allService?.name}</h6>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;