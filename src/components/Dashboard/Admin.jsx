import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { GrAdd, GrServices } from "react-icons/gr";
import { BsPersonAdd } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AuthContext } from '../../providers/AuthProviders';


const Admin = () => {
    const { user, logOut } = useContext(AuthContext);

    const [loggedInUser, setLoggedInUser] = useState({})
    
    useEffect(() => {
        const email = user?.email;
        fetch(`http://localhost:5000/users/${email}`)
            .then(res => res.json())
            .then(data => {
                setLoggedInUser(data)
            })
    }, [])

    //TODO List make admin in database
    const isAdmin = true;

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className='bg-base-200 p-3'>
                    <h2 className='text-3xl text-accent-focus'>{user?.displayName}</h2>
                </div>
                {/* Page content here */}
                <div className='p-5'>
                    {/* {
                        loggedInUser?.role === "admin" ? <p>Admin</p> : <p>User</p>
                    } */}
                    <Outlet></Outlet>
                </div>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to='/' className='text-3xl'>nn-tailor</Link></li>
                    {
                        
                        loggedInUser?.role === "admin" ?
                                <>
                                    <li><Link to='order'><FaShoppingCart /> Order List</Link></li>
                                    <li><Link to='addService'><GrAdd /> Add Service</Link></li>
                                    <li><Link to='allServices'><GrServices /> All Services</Link></li>
                                    <li><Link to='admin'><BsPersonAdd /> Make Admin</Link></li>
                                </>
                                :
                                <>
                                    <li><Link to='book'><BsPersonAdd /> Book</Link></li>
                                    <li><Link to='bookingList'><BsPersonAdd /> Booking List</Link></li>
                                    <li><Link to='review'><MdOutlineDashboardCustomize />Review</Link></li>
                                </>
                      
                    }
                    <li><Link to='/' onClick={handleLogOut}><FiLogOut />Sign Out</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Admin;