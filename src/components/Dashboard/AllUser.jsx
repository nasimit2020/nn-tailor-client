import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllUser = () => {
    const users = useLoaderData();
    console.log(users);

    
    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleDeleteUser = user =>{
        fetch(`http://localhost:5000/users/delete/${user._id}`, {
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              })            
        })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users?.map( (user, i) => (
                            <tr
                            key={user._id}
                            >
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                        user.role === 'admin' ? <p className='text-xl'>Admin</p> : <button onClick={() => handleMakeAdmin(user)} className='btn btn-primary btn-sm'>Make Admin</button>
                                    }</td>
                                <td><button onClick={() => handleDeleteUser(user)} className='btn btn-primary btn-sm'>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUser;