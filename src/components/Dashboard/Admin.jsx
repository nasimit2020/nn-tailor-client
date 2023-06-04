import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { BsPersonAdd } from "react-icons/bs";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AuthContext } from '../../contexts/UserContext';


const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(AuthContext);
    
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className='bg-base-200 p-3'>
                    <h2 className='text-3xl'>Name: {loggedInUser?.displayName}</h2>
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

                    <li><a><Link to='/' className='text-3xl'>nn-tailor</Link></a></li>
                    <li><Link to='user'><FaShoppingCart/> Order List</Link></li>
                    <li><Link to='user'><GrAdd/> Add Service</Link></li>
                    <li><Link to='user'><BsPersonAdd/> Make Admin</Link></li>
                    <li><Link to='user'><MdOutlineDashboardCustomize/> Manage Services</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Admin;