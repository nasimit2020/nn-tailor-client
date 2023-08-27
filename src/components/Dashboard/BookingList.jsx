import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const BookingList = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orderList/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [])


    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-GB');
    return (
        <div className="grid grid-cols-2 gap-4">
            {
                orders.map(order => (
                    <div key={order._id} className="card w-96 bg-base-100 shadow-xl">

                        <div className="card-body">
                            <div className='flex justify-between mb-5'>
                                <div className=''><img src={order.imageUrl} alt="Order Image" style={{ width: '64px' }} /></div>
                                <div className=''>
                                    {order.orderStatus  ? <button className='btn btn-success btn-sm'>{order.orderStatus}</button>:  <button className='btn btn-error btn-sm'>Pending</button>}
                                </div>
                            </div>
                            <h2 className="card-title">{order.serviceName}</h2>
                            <p>Order Date: {order.orderDate}</p>
                            <p>Price: {order.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>

    );
};

export default BookingList;