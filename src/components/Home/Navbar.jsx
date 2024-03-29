import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase_config';
import { AuthContext } from '../../providers/AuthProviders';

const Navbar = () => {
    const menu = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="services">Services</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="shop">Shop</Link></li>
        <li><Link to="contact">Contact</Link></li>

    </>

    // const [user, loading, error] = useAuthState(auth);
    // const [signOut] = useSignOut(auth);
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="navbar bg-base-100 lg:px-32 sm:px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to='/' className="text-xl">nn_Tailor</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <div>
                        <ul className="menu menu-horizontal">
                            <Link to="/" className="px-3 text-error" onClick={handleLogOut} >SighOut</Link>
                            <Link to="dashboard" className='text-accent'>Dashboard</Link>
                        </ul>
                    </div>
                    : <Link to="/login" className="text-success">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;