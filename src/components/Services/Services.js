import React, { useEffect, useState } from 'react';
import Service from './Service';
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='bg-color-services pb-5'>
            <div className='container'>
                <h2 className='text-center text-light py-5'>Our Services</h2>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <Service service={service}></Service>)
                    }
                </div>
            </div >
        </div>
    );
};

export default Services;