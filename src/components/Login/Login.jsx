import React from 'react';
import { BsGoogle } from "react-icons/bs";

const Login = () => {
    return (
        <div className='h-72 place-content-center grid bg-teal-50'>
            <button className="btn btn-outline btn-success btn-wide gap-8">
                <BsGoogle />
                Login
            </button>
        </div>
    );
};

export default Login;