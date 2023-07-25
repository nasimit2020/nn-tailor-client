import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookingList = () => {
    const orderList = useLoaderData();
    console.log(orderList); 
    return (
        <div>
            {
                orderList.map(order =>(
                    <h2>{order.serviceName}</h2>
                ))
            }
        </div>
    );
};

export default BookingList;