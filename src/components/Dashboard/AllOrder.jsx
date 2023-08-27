import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllOrder = () => {
    const orderList = useLoaderData();
    console.log(orderList);
    const handleStatusChange = async (orderId, newStatus) => {
        const newOrderStatus = {
            orderStatus: newStatus
        }

        fetch(`http://localhost:5000/orderStatus/${orderId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrderStatus)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    };

    return (
        <div>
            <h2 className='text-3xl text-center'>All Order</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Payment Status</th>
                            <th>Order Date</th>
                            <th>Order Status</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            orderList?.map((order, i) => (
                                <tr
                                    key={order._id}
                                >
                                    <th>{i + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.serviceName}</td>
                                    <td>{order.price}</td>
                                    <td>{order.paymentStatus || 'unpaid'}</td>
                                    <td>{order.orderDate}</td>
                                    <td>{order.orderStatus}</td>
                                    <td>
                                        <select
                                            // value={order.orderStatus}
                                            onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                            className="select select-ghost w-full max-w-xs">
                                            <option value="Pending">Pending</option>
                                            <option value="On Going">On Going</option>
                                            <option value="Done">Done</option>
                                        </select>
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

export default AllOrder;