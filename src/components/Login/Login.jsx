import React, { useEffect } from 'react';
import { BsGoogle } from "react-icons/bs";
import auth from '../../firebase/firebase_config';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    let from = location.state?.from?.pathname || '/';

    

    return (
        <div className='h-72 place-content-center grid bg-teal-50'>
            <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-success btn-wide gap-8">
                <BsGoogle />
                Login
            </button>
            
        </div>
    );
};

export default Login;