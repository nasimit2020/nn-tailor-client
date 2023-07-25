import React from 'react';
import { Navigate, redirect, useLocation } from 'react-router-dom';
import auth from '../../firebase/firebase_config';
import { useAuthState } from 'react-firebase-hooks/auth';

const PrivateRoute = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (user) {
        return children;
    }
      
    return <Navigate to='/login' state={{ from: location }} replace /> ;
};

export default PrivateRoute;