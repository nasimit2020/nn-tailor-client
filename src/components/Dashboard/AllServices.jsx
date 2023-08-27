import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllServices = () => {
    const allServices = useLoaderData();
    const handleDelete = (id, price) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }

    return (
        <div>
            <h2 className='text-2xl'>All Services</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allServices?.map(allService => (
                                <tr key={allService._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={allService.url.url} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{allService.name}</div>
                                                <div className="text-sm opacity-50">${allService.price}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {allService.details}
                                    </td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Edit</button>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(allService._id)} className="btn btn-ghost btn-xs">Delete</button>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllServices;