import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const order = useLoaderData();
    const {serviceName, price} = order;
    return (
        <div>
            <p className="text-xl"><strong>${price}</strong> pay for <span className='text-success'>{serviceName}</span> service.</p>
        </div>
    );
};

export default Payment;