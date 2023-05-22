import React from 'react';
import Ladies from '../../assets/images/ladies.jpg';
import Baby from '../../assets/images/baby.jpg';
import Boy from '../../assets/images/boy.jpg';
import Resizing from '../../assets/images/Resizing.jpg';
import { Link } from 'react-router-dom';

const services = [
    { id: 1, serviceName: 'Ladies Dress', img: Ladies },
    { id: 1, serviceName: 'Child Dress', img: Baby },
    { id: 1, serviceName: 'Men Dress', img: Boy },
    { id: 1, serviceName: 'Resizing Dress', img: Resizing },
]

const Services = () => {

    return (
        <div className='lg:px-32 sm:px-12 py-12'>
            <h2 className='text-2xl font-medium pb-5'>For Your Dress</h2>
            <div class="grid grid-cols-4 gap-4">
                {
                    services.map(service => (
                        <Link to={`/serviceDetails/${service.serviceName}`}>
                            <div className='text-center'>
                                <img src={service.img} alt="" className='w-full h-48 rounded-xl' />
                                <h6 className='text-xl py-2 font-medium'>{service.serviceName}</h6>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;