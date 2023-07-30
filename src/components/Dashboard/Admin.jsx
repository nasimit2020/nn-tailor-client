import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { BsPersonAdd } from "react-icons/bs";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import auth from '../../firebase/firebase_config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthContext } from '../../providers/AuthProviders';


const Admin = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className='bg-base-200 p-3'>
                    <h2 className='text-3xl'>Name: {user?.displayName}</h2>
                </div>
                {/* Page content here */}
                <div className='p-5'>
                    <Outlet></Outlet>
                </div>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}

                    <li><Link to='/' className='text-3xl'>nn-tailor</Link></li>
                    <li><Link to='order'><FaShoppingCart/> Order List</Link></li>
                    <li><Link to='addService'><GrAdd/> Add Service</Link></li>
                    <li><Link to='admin'><BsPersonAdd/> Make Admin</Link></li>
                    <li><Link to='book'><BsPersonAdd/> Book</Link></li>
                    <li><Link to='bookingList'><BsPersonAdd/> Booking List</Link></li>
                    <li><Link to='review'><MdOutlineDashboardCustomize/>Review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Admin;