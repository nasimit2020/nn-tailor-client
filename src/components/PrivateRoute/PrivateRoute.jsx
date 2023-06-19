import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const PrivateRoute = ({ children }) => {
    const [loggedInUser, setLoggedInUser, loading] = useContext(AuthContext);
    const location = useLocation();

    if (loggedInUser && loggedInUser.uid) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace> </Navigate>;
};

export default PrivateRoute;