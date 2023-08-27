import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Book = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orderList/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Order Date</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            orders?.map( (order, i) => (
                                <tr
                                key={order._id}
                                >
                                    <th>{i + 1}</th>
                                    <td>{order.serviceName}</td>
                                    <td>{order.price}</td>
                                    <td>{order.orderDate}</td>
                                    <td>
                                        {
                                            order.price && !order.paid && <Link
                                            to={`/dashboard/book/payment/${order._id}`}
                                            >
                                            <button className='btn btn-primary btn-sm'>Pay</button>
                                            </Link>
                                        }
                                        {
                                            order.price && order.paid && <span>Paid</span>
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Book;